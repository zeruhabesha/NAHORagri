"use client"

import type React from "react"

// Shadcn/ui toast hook
import { useEffect, useState } from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToastActionElement = React.ReactElement

export type Toast = {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
  variant?: "default" | "destructive"
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function generateId() {
  return `${count++}`
}

// Helper to create a toast
export function toast({ title, description, action, variant }: Omit<Toast, "id">) {
  const id = generateId()

  const update = (props: Omit<Toast, "id">) => {
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...props, id },
    })
  }

  const dismiss = () => {
    dispatch({
      type: actionTypes.DISMISS_TOAST,
      toastId: id,
    })
  }

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      id,
      title,
      description,
      action,
      variant,
    },
  })

  return {
    id,
    dismiss,
    update,
  }
}

type Action =
  | {
      type: typeof actionTypes.ADD_TOAST
      toast: Toast
    }
  | {
      type: typeof actionTypes.UPDATE_TOAST
      toast: Partial<Toast> & { id: string }
    }
  | {
      type: typeof actionTypes.DISMISS_TOAST
      toastId: string
    }
  | {
      type: typeof actionTypes.REMOVE_TOAST
      toastId: string
    }

interface State {
  toasts: Toast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case actionTypes.UPDATE_TOAST:
      return {
        ...state,
        toasts: state.toasts.map((t) => (t.id === action.toast.id ? { ...t, ...action.toast } : t)),
      }

    case actionTypes.DISMISS_TOAST: {
      const { toastId } = action

      // Cancel any existing timeout
      if (toastTimeouts.has(toastId)) {
        clearTimeout(toastTimeouts.get(toastId))
      }

      // Set timeout to remove toast
      toastTimeouts.set(
        toastId,
        setTimeout(() => {
          dispatch({
            type: actionTypes.REMOVE_TOAST,
            toastId,
          })

          toastTimeouts.delete(toastId)
        }, TOAST_REMOVE_DELAY),
      )

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }

    case actionTypes.REMOVE_TOAST:
      if (toastTimeouts.has(action.toastId)) {
        clearTimeout(toastTimeouts.get(action.toastId))
        toastTimeouts.delete(action.toastId)
      }

      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

export function useToast() {
  const [state, setState] = useState<State>(memoryState)

  useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId: string) =>
      dispatch({
        type: actionTypes.DISMISS_TOAST,
        toastId,
      }),
  }
}
