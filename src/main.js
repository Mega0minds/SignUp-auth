document.getElementById('app').innerHTML = `
  <header class="absolute inset-x-0 top-0 z-50">
      <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                  <span class="sr-only">Home</span>
                  <img class="h-8 w-auto" src="./src/media/logo.png" alt="">
              </a>
          </div>
          <div class="flex lg:hidden">
              <button type="button"
                  class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                  <span class="sr-only">Open main menu</span>
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                      aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
              </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Product</a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Resources</a>
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Pricing</a>
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Log in <span
                      aria-hidden="true">&rarr;</span></a>
              <button class="flex-none rounded-md bg-indigo-400 px-2.5 py-0.2">
                  <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Sign Up <span
                          aria-hidden="true"></span></a>
              </button>
          </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div class="lg:hidden" role="dialog" aria-modal="true">
          <!-- Background backdrop, show/hide based on slide-over state. -->
          <div class="fixed inset-0 z-50"></div>
          <div
              class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div class="flex items-center justify-between">
                  <a href="#" class="-m-1.5 p-1.5">
                      <span class="sr-only">Megamind</span>
                      <img class="h-8 w-auto" src="./src/media/logo.png"
                          alt="">
                  </a>
                  <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                      <span class="sr-only">Close menu</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                          aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              </div>
              <div class="mt-6 flow-root">
                  <div class="-my-6 divide-y divide-gray-500/10">
                      <div class="space-y-2 py-6">
                          <a href="#"
                              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Home</a>
                          <a href="#"
                              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                          <a href="#"
                              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Resources</a>
                          <a href="#"
                              class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Pricing</a>
                      </div>
                      <div class="py-6">
                          <a href="#"
                              class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                              in</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </header>

  <div class="flex justify-center items-center min-h-screen bg-white">
      <div class="max-w-md w-full rounded p-8 space-y-1">
          <div class="flex justify-center mb-4">
              <img src="./src/media/logo.png" alt="Logo" class="h-12">
          </div>
          <h2 class="text-2xl font-bold text-center">Create an account</h2>
          <p class="text-center text-gray-600">Start your 30-day free trial.</p>
          <form id="signup-form" class="space-y-4">
              <input type="email" id="email" name="email" required
                  class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md">Get started</button>
          </form>
          <div class="flex items-center justify-center mt-4">
              <span class="text-gray-600">OR</span>
          </div>
          <div class="space-y-2">
              <button
                  class="flex w-full bg-white text-black justify-center py-2 px-4 border border-gray-300 rounded-md"><svg
                      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                      <path fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c9.941,0,18.655-7.283,19.872-16.667C43.96,25.353,44,22.69,44,20.083z">
                      </path>
                      <path fill="#FF3D00"
                          d="M6.306,14.691l6.568,4.818C14.716,16.588,19.027,14,24,14c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C15.656,4,8.37,8.768,6.306,14.691z">
                      </path>
                      <path fill="#4CAF50"
                          d="M24,44c5.155,0,9.861-1.955,13.416-5.145l-6.032-5.177C29.42,35.885,26.774,37,24,37c-5.233,0-9.669-3.36-11.32-8.049l-6.46,4.977C8.237,39.798,15.543,44,24,44z">
                      </path>
                      <path fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.804,2.27-2.221,4.241-4.014,5.657c0.001-0.001,0.001-0.001,0.002-0.002l6.032,5.177C36.575,36.438,44,31.561,44,20.083C44,22.69,43.96,25.353,43.611,20.083z">
                      </path>
                  </svg><span class="ml-2">Sign up with Google</span></button>
              <button
                  class="flex w-full bg-white text-black justify-center py-2 px-4 border border-gray-300 rounded-md"><svg
                      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                      <path fill="#3B5998"
                          d="M39,24c0-8.3-6.7-15-15-15S9,15.7,9,24c0,7.5,5.5,13.6,12.7,14.8V29.7h-3.8v-5.7h3.8v-3.6c0-3.8,2.2-5.9,5.6-5.9c1.6,0,3.2,0.3,3.2,0.3v3.5h-1.8c-1.8,0-2.3,1.1-2.3,2.2v2.6h4.1l-0.7,5.7h-3.4v9.1C33.5,37.6,39,31.5,39,24z">
                      </path>
                  </svg><span class="ml-2">Sign up with Facebook</span></button>
              <button
                  class="flex w-full bg-white text-black justify-center py-2 px-4 border border-gray-300 rounded-md"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                  <path
                      d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z">
                  </path>
              </svg><span class="ml-2">Sign up with Apple</span></button>
          </div>
      </div>
  </div>
`;

document.getElementById('signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    localStorage.setItem('signupEmail', email);
    alert(`Email ${email} has been saved!`);
});
