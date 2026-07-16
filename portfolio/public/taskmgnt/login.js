document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');
  const togglePasswordBtn = document.getElementById('togglePassword');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = document.getElementById('btnText');
  const btnSpinner = document.getElementById('btnSpinner');
  const toast = document.getElementById('toast');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastIconContainer = document.getElementById('toastIconContainer');
  const forgotPasswordLink = document.getElementById('forgotPassword');

  // Toggle Password Visibility
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.getAttribute('type') === 'password';
    passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
    
    // Toggle Eye Icon
    const icon = togglePasswordBtn.querySelector('i');
    if (isPassword) {
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
      icon.classList.add('text-blue-500');
    } else {
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
      icon.classList.remove('text-blue-500');
    }
  });

  // Validation Rules & Live Feedback helpers
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const clearErrors = () => {
    emailError.classList.add('hidden');
    passwordError.classList.add('hidden');
    emailInput.classList.remove('border-red-500');
    passwordInput.classList.remove('border-red-500');
  };

  // Toast System
  let toastTimeout;
  const showToast = (type, title, message) => {
    // Clear any active toast timeouts
    clearTimeout(toastTimeout);

    // Setup colors/icons based on status type
    if (type === 'success') {
      toastIconContainer.className = 'p-1.5 rounded-lg text-white bg-green-500';
      toastIconContainer.innerHTML = '<i class="fa-solid fa-circle-check text-base"></i>';
    } else if (type === 'error') {
      toastIconContainer.className = 'p-1.5 rounded-lg text-white bg-red-500';
      toastIconContainer.innerHTML = '<i class="fa-solid fa-circle-xmark text-base"></i>';
    } else {
      toastIconContainer.className = 'p-1.5 rounded-lg text-white bg-blue-500';
      toastIconContainer.innerHTML = '<i class="fa-solid fa-circle-info text-base"></i>';
    }

    toastTitle.textContent = title;
    toastMessage.textContent = message;

    // Trigger Toast Animation
    toast.classList.remove('-translate-y-20', 'opacity-0', 'pointer-events-none', 'animate-slide-down');
    // Force browser reflow to restart animation
    void toast.offsetWidth;
    toast.classList.add('animate-slide-down');

    // Auto dismiss after 4 seconds
    toastTimeout = setTimeout(() => {
      toast.classList.add('-translate-y-20', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('animate-slide-down');
    }, 4000);
  };

  // Form Submit Handler
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const emailVal = emailInput.value.trim();
    const passwordVal = passwordInput.value;
    let isValid = true;

    // Email validation
    if (!emailVal) {
      emailError.textContent = 'Email field is required.';
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-red-500');
      isValid = false;
    } else if (!validateEmail(emailVal)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-red-500');
      isValid = false;
    }

    // Password validation
    if (!passwordVal) {
      passwordError.textContent = 'Password field is required.';
      passwordError.classList.remove('hidden');
      passwordInput.classList.add('border-red-500');
      isValid = false;
    } else if (passwordVal.length < 6) {
      passwordError.textContent = 'Password must be at least 6 characters.';
      passwordError.classList.remove('hidden');
      passwordInput.classList.add('border-red-500');
      isValid = false;
    }

    if (!isValid) return;

    // Set Loading State
    submitBtn.disabled = true;
    btnText.textContent = 'Signing In...';
    btnSpinner.classList.remove('hidden');
    submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

    // Simulate API request call
    setTimeout(() => {
      // Revert loading state
      submitBtn.disabled = false;
      btnText.textContent = 'Sign In';
      btnSpinner.classList.add('hidden');
      submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');

      // Demo sign-in validation
      // Accept demo account neelamanigandanv2005@gmail.com / dynamic password
      const storedPassword = localStorage.getItem('demoPassword') || 'mani10092005';
      const regEmail = localStorage.getItem('regEmail');
      const regPassword = localStorage.getItem('regPassword');
      const regFirstName = localStorage.getItem('regFirstName') || 'User';

      if (emailVal === 'neelamanigandanv2005@gmail.com' && passwordVal === storedPassword) {
        showToast('success', 'Sign In Successful', 'Redirecting to your dashboard...');
        setTimeout(() => {
          window.location.href = 'welcome.html';
        }, 1000);
      } else if (regEmail && emailVal === regEmail && passwordVal === regPassword) {
        showToast('success', 'Sign In Successful', `Welcome back, ${regFirstName}! Redirecting...`);
        setTimeout(() => {
          window.location.href = 'welcome.html';
        }, 1000);
      } else {
        const hintMsg = regEmail ? `use ${regEmail} or neelamanigandanv2005@gmail.com` : `use neelamanigandanv2005@gmail.com / ${storedPassword}`;
        showToast('error', 'Sign In Failed', `Invalid credentials. Hint: ${hintMsg}`);
      }
    }, 1500);
  });

  // Forgot Password Validation Handler
  forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    clearErrors();

    const emailVal = emailInput.value.trim();

    if (!emailVal) {
      emailError.textContent = 'Please enter your email address to reset your password.';
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-red-500');
      emailInput.focus();
    } else if (!validateEmail(emailVal)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.classList.remove('hidden');
      emailInput.classList.add('border-red-500');
      emailInput.focus();
    } else {
      // Save email in localStorage
      localStorage.setItem('resetEmail', emailVal);
      window.location.href = 'reset-password.html';
    }
  });

});
