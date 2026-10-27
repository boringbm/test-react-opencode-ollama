// Custom type shim for the `bootstrap` module.
//
// @types/bootstrap@5.2.11 (the latest published version) only exports a subset
// of Bootstrap's modal/carousel classes and does NOT export the core components
// used throughout this project (Form, FormControl, FormGroup, Container, Overlay,
// InputGroup, Alert, Thead, Tbody, Tr, Th, Td, etc.). Bootstrap 5 itself does
// not ship any type declarations.
//
// This declaration file is a minimal, type-accurate shim providing the
// component types needed by this React + TypeScript project. It relies on the
// globally available `React.JSX` types (React 18+) for JSX compatibility.

import type {
  ReactElement,
  JSX,
  ElementType,
  ComponentType,
} from 'react'

// ---- Base component type ---------------------------------------------------

type BootstrapComponent<TProps extends Record<string, unknown> = Record<string, unknown>> = {
  new (props: TProps): React.Component<any, any, any>
  (props: TProps): ReactElement | null
}

// ---- Form components -------------------------------------------------------

interface FormProps {
  onSubmit?: (event: React.FormEvent) => void
  [key: string]: unknown
}

interface FormGroupProps {
  controlId: string
  className?: string
  [key: string]: unknown
}

interface FormControlProps {
  type?: string
  id?: string
  placeholder?: string
  value?: unknown
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  autoComplete?: string
  required?: boolean
  [key: string]: unknown
}

interface InputGroupTextProps {
  children?: ReactNode
  id?: string
  className?: string
  [key: string]: unknown
}

interface InputGroupProps {
  children?: ReactNode | InputGroupTextProps
  id?: string
  className?: string
  [key: string]: unknown
}

interface ContainerProps {
  className?: string
  [key: string]: unknown
}

interface OverlayProps {
  className?: string
  [key: string]: unknown
}

// ---- Alert ---------------------------------------------------------------

interface AlertProps {
  show?: boolean
  variant?: string
  onClose?: () => void
  children?: ReactNode
  [key: string]: unknown
}

// ---- Button ---------------------------------------------------------------

interface ButtonProps {
  type?: 'button' | 'submit'
  variant?: string
  size?: string
  className?: string
  block?: boolean
  onClick?: (event: React.MouseEvent) => void
  children?: ReactNode
  [key: string]: unknown
}

// ---- Table component (bootstrap Thead / Tbody / Tr / Th / Td) -------------

export interface TheadProps {
  children?: ReactNode
  className?: string
  [key: string]: unknown
}

export interface TbodyProps {
  children?: ReactNode
  className?: string
  [key: string]: unknown
}

export interface TrProps {
  key?: string
  className?: string
  children: ReactNode[]
  [key: string]: unknown
}

export interface ThProps {
  scope?: string
  children?: ReactNode
  className?: string
  [key: string]: unknown
}

export interface TdProps {
  children?: ReactNode
  className?: string
  [key: string]: unknown
}

// ---- Full module surface for the `bootstrap` import -----------------------

declare module 'bootstrap' {
  export const Alert: BootstrapComponent<AlertProps>
  export const Button: BootstrapComponent<ButtonProps>
  export const Container: BootstrapComponent<ContainerProps>
  export const Form: BootstrapComponent<FormProps>
  export const FormControl: BootstrapComponent<FormControlProps>
  export const FormGroup: BootstrapComponent<FormGroupProps>
  export const InputGroup: BootstrapComponent<InputGroupProps> & {
    Text: typeof InputGroupText
  }
  export const InputGroupText: BootstrapComponent<InputGroupTextProps>
  export const Overlay: BootstrapComponent<OverlayProps>
  export const Thead: BootstrapComponent<TheadProps>
  export const Tbody: BootstrapComponent<TbodyProps>
  export const Tr: BootstrapComponent<TrProps>
  export const Th: BootstrapComponent<ThProps>
  export const Td: BootstrapComponent<TdProps>
}

// Re-declare ReactNode for use in the type interfaces above.
type ReactNode = JSX.Element | JSX.Text | ReactElement | null | undefined

declare global {
  namespace JSX {
    type Element = ReactElement
    interface ElementClassAttributes<T> {
      className?: string
      [key: string]: unknown
    }
  }
}
