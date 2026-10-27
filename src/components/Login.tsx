import { useState } from 'react'
import '../Login.css'

interface LoginProps {
  onLogin: () => void
}

export default function Login({ onLogin }: LoginProps) {
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const validate = (): boolean => {
    if (!formData.email || !/^\S+@\S+$/.test(formData.email)) {
      setError('Please enter a valid email address.')
      return false
    }
    if (formData.password.length < 1) {
      setError('Password is required.')
      return false
    }
    setError('')
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      onLogin()
    }
  }

  const updateField = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    setError('')
  }

  return (
    <div className="login-wrapper">
      <div className="container py-5">
        {/* Centered card */}
        <CardContainer
          title="Welcome Back"
          subtitle="Sign in to your account to continue"
          tag={<span className="badge bg-primary-subtle text-primary fw-bold">Login</span>}
          children={
            <>
              <div
                className={
                  "alert d-flex align-items-center " +
                  (error ? 'alert-danger' : 'alert-info')
                }
              >
                {error}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Email field */}
                <div className="form-group mb-3">
                  <div className="input-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email address"
                      value={formData.email}
                      onChange={updateField('email')}
                      autoComplete="email"
                      required
                    />
                    <div className="input-group-text">
                      <i className="bi bi-envelope" />
                    </div>
                  </div>
                </div>

                {/* Password field */}
                <div className="form-group mb-3">
                  <div className="input-group">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={updateField('password')}
                      autoComplete="current-password"
                      required
                    />
                    <div className="input-group-text">
                      <i className="bi bi-lock" />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 mt-3"
                >
                  <i className="bi bi-box-arrow-in-right me-2" />
                  Login
                </button>
              </form>

              <p className="text-center text-muted small mt-3">
                <span className="text-secondary">Demo</span> — any email + any password works.
              </p>
            </>
          }
        />
      </div>

      {/* Overlay at the end of the root div (styling only) */}
      <div className="overlay-overlay">
      </div>
    </div>
  )
}

interface CardContainerProps {
  title: string
  subtitle: string
  tag: React.ReactNode
  children?: React.ReactNode
}

function CardContainer({ title, subtitle, tag, children }: CardContainerProps) {
  return (
    <div className="login-card">
      <div className="login-card-content">
        <div className="login-card-header">
          <span className="login-card-tag">{tag}</span>
          <h2 className="login-card-title">{title}</h2>
          <p className="login-card-subtitle">{subtitle}</p>
        </div>
        <div className="login-card-body">{children}</div>
      </div>
    </div>
  )
}
