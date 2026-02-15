<script lang="ts">
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let loading = false;
  let error = '';

  async function handleLogin() {
    if (!email || !password) {
      error = 'Please fill in all fields';
      return;
    }

    loading = true;
    error = '';

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        goto('/admin');
      } else {
        const data = await response.json();
        error = data.error || 'Login failed';
      }
    } catch (_e) {
      error = 'An error occurred during login';
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Admin Login - Sivam Pasupathipillai</title>
</svelte:head>

<div class="login-container">
  <div class="login-form">
    <h1>Admin Login</h1>
    <p>Sign in to access the blog administration panel.</p>

    {#if error}
      <div class="error-message">
        {error}
      </div>
    {/if}

    <form on:submit|preventDefault={handleLogin}>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          bind:value={email}
          required
          disabled={loading}
          placeholder="admin@example.com"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          bind:value={password}
          required
          disabled={loading}
          placeholder="Enter your password"
        />
      </div>

      <button type="submit" class="login-button" class:loading disabled={loading}>
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>

    <div class="login-footer">
      <a href="/">← Back to website</a>
    </div>
  </div>
</div>

<style>
  .login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #0f766e 0%, #134e4a 100%);
    padding: 2rem;
  }

  .login-form {
    background: white;
    padding: 3rem;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
  }

  .login-form h1 {
    color: #1f2937;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .login-form p {
    color: #4b5563;
    text-align: center;
    margin-bottom: 2rem;
  }

  .form-group {
    margin-bottom: 1.5rem;
  }

  .form-group label {
    display: block;
    margin-bottom: 0.5rem;
    color: #1f2937;
    font-weight: 500;
  }

  .form-group input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.2s ease;
    box-sizing: border-box;
  }

  .form-group input:focus {
    outline: none;
    border-color: #0f766e;
    box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.1);
  }

  .error-message {
    background: #fef2f2;
    color: #dc2626;
    padding: 0.75rem;
    border-radius: 8px;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    border: 1px solid #fecaca;
  }

  .login-button {
    width: 100%;
    margin-top: 1rem;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    border: none;
    background: #0f766e;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .login-button:hover:not(:disabled) {
    background: #134e4a;
    transform: translateY(-1px);
  }

  .login-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .login-footer {
    text-align: center;
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e5e7eb;
  }

  .login-footer a {
    color: #0f766e;
    text-decoration: none;
    font-size: 0.9rem;
  }

  .login-footer a:hover {
    text-decoration: underline;
  }

  /* Responsive Design */
  @media (max-width: 480px) {
    .login-container {
      padding: 1rem;
    }

    .login-form {
      padding: 2rem;
    }
  }
</style>
