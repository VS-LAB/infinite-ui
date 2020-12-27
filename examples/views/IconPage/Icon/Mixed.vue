<template>
  <div class="infinite-icon-page-mixed">
    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 63 (92445) - https://sketch.com -->
        <title>Mixed</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <filter x="-15.3%" y="-22.1%" width="130.5%" height="144.2%" filterUnits="objectBoundingBox" id="filter-1">
                <feOffset dx="0" dy="14" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                <feGaussianBlur stdDeviation="25" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                <feColorMatrix values="0 0 0 0 0.0808827109   0 0 0 0 0.373803263   0 0 0 0 0.862573596  0 0 0 0.738499781 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                <feMerge>
                    <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                    <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
            </filter>
        </defs>
        <g id="v1.4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="12" transform="translate(-577.000000, -587.000000)">
                <g id="编组-20" filter="url(#filter-1)" transform="translate(557.000000, 362.000000)">
                    <g id="编组-7">
                        <g id="编组-29备份-2" transform="translate(0.000000, 205.000000)">
                            <g id="Mixed" transform="translate(20.000000, 20.000000)">
                                <rect id="矩形" stroke="#FFFFFF" stroke-width="3" x="1.5" y="1.5" width="15" height="15"></rect>
                                <path d="M2,3.51718654e-13 L13.1582587,3.51718654e-13 C14.2628282,3.52848016e-13 15.1582587,0.8954305 15.1582587,2 C15.1582587,2.53178124 14.9464755,3.0416679 14.5697187,3.41696186 L3.41145992,14.531894 C2.62889349,15.3114218 1.36256593,15.3089585 0.583038142,14.5263921 C0.209647022,14.1515455 6.47942226e-17,13.6440171 0,13.1149322 L0,2 C-1.3527075e-16,0.8954305 0.8954305,3.52809739e-13 2,3.51718654e-13 Z" id="矩形" fill="#FFFFFF"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Mixed',
  props: {
    color: {
      type: String,
      default: '#FF8D38'
    }
  }
}
</script>

<style lang='scss' scoped>
  .infinite-icon-page-mixed {
    display: inline-block;
    position: relative;
    // height: 100%;
    min-height: 12px;
    min-width: 12px;
  }
</style>
