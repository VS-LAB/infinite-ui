<template>
  <div class="infinite-icon-page-wireframe">
    <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 63 (92445) - https://sketch.com -->
        <title>Wireframe</title>
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
            <g id="12" transform="translate(-577.000000, -431.000000)" stroke="#FFFFFF" stroke-width="3">
                <g id="编组-20" filter="url(#filter-1)" transform="translate(557.000000, 362.000000)">
                    <g id="编组-7">
                        <g id="编组-29备份" transform="translate(0.000000, 49.000000)">
                            <g id="编组" transform="translate(20.000000, 20.000000)">
                                <rect id="Wireframe" x="1.5" y="1.5" width="15" height="15"></rect>
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
  name: 'Wireframe',
  props: {
    color: {
      type: String,
      default: '#FF8D38'
    }
  }
}
</script>

<style lang='scss' scoped>
  .infinite-icon-page-wireframe {
    display: inline-block;
    position: relative;
    // height: 100%;
    min-height: 12px;
    min-width: 12px;
  }
</style>
