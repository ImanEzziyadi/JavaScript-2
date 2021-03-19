<template>
  <form class="text-center border border-primary py-5" >
 <p class="h4 mb-4">Sign in </p>
  <div class="row mb-4">
    <div class="col">
     
        <input type="text" id="form3Example1" class="form-control mb-4" placeholder="Firdt Name" />
        
    </div>
    <div class="col">
    
        <input type="text" id="form3Example2" class="form-control mb-4"  placeholder="Last Name" />
       
    </div>
  </div>


 
    <input type="email" id="form3Example3" class="form-control mb-4"  placeholder=" email" />
    

 
    <input type="password" id="form3Example4" class="form-control"  placeholder="password" />
   

  <!-- Checkbox -->
  <div class="form-check d-flex justify-content-center mb-4">
    <input
      class="form-check-input me-2"
      type="checkbox"
      value=""
      id="form2Example3"
      checked
    />
    <label class="form-check-label" for="form2Example3">
      Subscribe to our newsletter
    </label>
  </div>

  <!-- Submit button -->
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>

  <!-- Register buttons -->
  <div class="text-center">
    <p>or sign up with:</p>
    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" class="btn btn-primary btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</form>
</template>

<script>
export default {

}
</script>

<style>

</style>