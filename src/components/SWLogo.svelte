<script>
    import {fade, draw, fly} from 'svelte/transition';
    import {circIn, circOut} from 'svelte/easing';
    import {text_paths} from '../svg/SWLogo_Paths';

    const options = {
        background: {
            fill: {
                delay: 600,
                duration: 400
            },
            stroke: {
                delay: 200,
                duration: 400
            }
        },
        parts: {
            fill: {
                delay: 1400,
                duration: 800
            },
            stroke: {
                delay: 1000,
                duration: 1200
            }
        }
    };
</script>
<div>
    <svg viewBox="0 0 250 250">
        <g>
            <!-- Filled Shapes -->
            <circle id="__sw_background_fill" r="92.35" cx="125" cy="119.2" class="red-fill"
                    in:fade={options.background.fill}/>
            <circle id="__sw_head_fill" r="16.96" cx="110.91" cy="55.59" class="white-fill"
                    in:fade={options.parts.fill}/>
            <polygon id="__sw_body_fill" class="white-fill"
                     points="37.38,95.59 192.49,61.76 63.53,188.17 61.4,186.2 84.73,120.78 "
                     in:fade={options.parts.fill}/>
            <polygon id="__sw_leg_fil" class="white-fill"
                     points="121.17,145.96 121.17,146.61 168.07,199.89 143.9,123.93 	"
                     in:fade={options.parts.fill}/>
            <!-- Outlines -->
            <path id="__sw_background_stroke" class="red-stroke" in:draw={options.background.stroke}
                  d="M217.35,119.2c0,51-41.35,92.35-92.35,92.35s-92.35-41.35-92.35-92.35S74,26.85,125,26.85 S217.35,68.2,217.35,119.2z"/>
            <path id="__sw_head_stroke" class="white-stroke" in:draw={options.parts.stroke}
                  d="M127.87,55.59c0,9.37-7.59,16.96-16.96,16.96s-16.96-7.59-16.96-16.96 s7.59-16.96,16.96-16.96S127.87,46.22,127.87,55.59z"/>
            <path id="__sw_body_stroke" class="white-stroke" in:draw={options.parts.stroke}
                  d="M37.38,95.59l155.11-33.83L63.53,188.17l-2.13-1.96l23.33-65.42L37.38,95.59z"/>
            <path id="__sw_leg_stroke" class="white-stroke" in:draw={options.parts.stroke}
                  d="M143.9,123.93l24.18,75.96l-46.9-53.28v-0.65L143.9,123.93z"/>
            <path id="__sw_surround_stroke" class="black-stroke" in:draw={options.parts.stroke}
                  d="M51.41,199.89C29.53,179.92,15.8,151.16,15.8,119.2C15.8,58.89,64.69,10,125,10s109.2,48.89,109.2,109.2 c0,31.96-13.73,60.71-35.61,80.68"/>
            <!-- Text Compound Path, may need to be split into letters -->
            {#each text_paths as path, i}
                <path class="black-stroke" in:draw={{delay:(400 + (i*150))}} d="{path}" />
            {/each}
        </g>
    </svg>
</div>
<style>
    .white-stroke {
        stroke: #FFFFFF;
        fill: none;
    }

    .white-fill {
        fill: #ffffff;
        stroke: none;
    }

    .red-stroke {
        fill: none;
        stroke: #AF0006;
    }

    .red-fill {
        fill: #AF0006;
        stroke: none;
    }

    .black-stroke{
        fill:none;
        stroke:#000;
    }
    div {
        width: 20em;
        position: relative;
        height: 20em;
        left: 50%;
        transform: translateX(-50%);
    }
</style>