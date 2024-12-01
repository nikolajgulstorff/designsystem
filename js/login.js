document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("iform-totally-logged-in")) {
    const div = document.createElement("div");
    div.id = "totally-delete-me";
    div.style.width = "100vw";
    div.style.height = "100vh";
    div.style.position = "fixed";
    div.style.zIndex = "9999";
    div.style.display = "flex";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Semitransparent black background

    // Modal content
    div.innerHTML = `
      <div class="bg-orange-200 p-8 max-w-sm w-full rounded-md shadow-md">
        <h1 class="text-center text-2xl font-bold mb-4">Login</h1>
        <p class="text-center text-sm mb-2">This is a school project</p>
        <p class="text-center text-sm mb-6">The password is <code class="bg-orange-900 p-1 rounded">hojskolendkkea</code></p>
        <form class="space-y-4">
          <input 
            type="password" 
            name="pass" 
            placeholder="Password"
            class="w-full h-11 px-3 border rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
          >
          <input 
            type="submit" 
            name="login" 
            class="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 cursor-pointer"
            value="Login"
          >
        </form>
      </div>
    `;

    // Append modal to the body
    document.body.prepend(div);

    // Lock scroll on the body
    document.body.style.overflow = "hidden";

    // Form submission handling
    const form = div.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const passwordInput = form.querySelector("input[name=pass]").value;

      // Check password
      if (passwordInput === "hojskolendkkea") {
        div.remove();  // Remove modal
        document.body.style.overflow = "auto";  // Unlock scroll
        localStorage.setItem("iform-totally-logged-in", true);  // Save login state
      } else {
        alert("Forkert kode. Prøv igen.");
      }
    });
  }
});

