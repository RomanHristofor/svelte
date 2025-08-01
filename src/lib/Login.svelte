<script>
  import { validateEmail, validatePassword } from '../utils/validation.js';
  export let formData;
  export let next;

  let showErrors = false;
  let errors = {};

  function validate() {
    const e = {};

    if (!formData.email.trim()) {
      e.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      e.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      e.password = 'Password is required';
    } else if (validatePassword(formData.password)) {
      e.password = validatePassword(formData.password);
    }

    return e;
  }

  const handleNext = () => {
    showErrors = true;
    errors = validate();

    if (!errors.email && !errors.password) {
      next();
    }
  };
</script>

<fieldset>
  <legend>Login</legend>

  <label>
    Email:
    <input type="email" bind:value={formData.email} />
    {#if showErrors && errors.email}
      <p class="error">{errors.email}</p>
    {/if}
  </label>

  <label>
    Password:
    <input type="password" bind:value={formData.password} />
    {#if showErrors && errors.password}
      <p class="error">{errors.password}</p>
    {/if}
  </label>

  <div class="buttons">
    <button class="btn btn-primary" on:click={handleNext}>Next</button>
  </div>

</fieldset>
