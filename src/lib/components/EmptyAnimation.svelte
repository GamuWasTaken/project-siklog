<script>
  import Tumbleweed from "./Tumbleweed.svelte";
</script>

<div class="container">
  <div class="slide">
    <div class="bounce">
      <div class="rotate">
        <Tumbleweed/>
      </div>
    </div>
  </div>
</div>
<style>


.container {
  padding: 200px 0;
  height: 400px;
}

.slide {
  width: 100px;
  animation: slide 20s linear infinite;
}
.bounce {
  animation: bounce .5s cubic-bezier(.58,1.16,1,1) infinite alternate;
}
.rotate {
  animation: rotate 1s linear infinite;
}

@keyframes slide {
  0%, 80% {
    translate: -150%;
  }

  100% {
    translate: 110vw;
  }
}

@keyframes bounce {
  0% {
    translate: 0 0;
    scale: 1 .8;
  }
  25% {
    scale: 1;
  }
  100% {
    translate: 0 -100%;
    scale: 1;
  }
}

@keyframes rotate {
  from {
    rotate: 0;
  }
  to {
    rotate: 360deg;
  }
}
  
</style>
