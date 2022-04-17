<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <li class="nav-item">
          <a class="nav-link" href="https://masothue.com/0316606291-cong-ty-tnhh-p-u-i-vn">
            P.U.I Ltd.
          </a>
        </li>
          <a class="nav-link" href="http://l2nk.npackr.com">
            101 Tân Vĩnh, Phường 06, Quận 4, Thành phố Hồ Chí Minh, Việt Nam
          </a>
        </li>
      </ul>
      <div class="copyright">
        © {{year}} made with <i class="tim-icons icon-heart-2"></i> by
        <a href="https://l2nk.npackr.com" target="_blank" rel="noopener">L2NK TEAM</a>&nbsp;&
        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">Creative Tim</a>.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
