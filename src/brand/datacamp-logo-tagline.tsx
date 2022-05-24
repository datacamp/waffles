import { tokens } from '../tokens';

import { BrandGenericProps } from './brand.types';

function DataCampLogoTagline({
  inverted = false,
  monochrome = false,
  ...restProps
}: BrandGenericProps) {
  const textColor = inverted ? tokens.colors.white : tokens.colors.navy;
  const logomarkColor = monochrome ? textColor : tokens.colors.green;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 288 129"
      xmlSpace="preserve"
      {...restProps}
    >
      <path
        d="M81.154 26.506v-14.74h4.368v38.005h-4.368v-3.053c-5.489 5.165-14.093 4.985-19.362-.405s-5.269-14.012 0-19.402c5.269-5.39 13.873-5.57 19.362-.405zm-18.21 13.73a9.457 9.457 0 0 0 8.738 5.85v.003a9.442 9.442 0 0 0 6.688-2.774 9.48 9.48 0 0 0 2.769-6.701 9.475 9.475 0 0 0-5.837-8.756 9.446 9.446 0 0 0-10.308 2.052 9.489 9.489 0 0 0-2.05 10.326zm139.909 5.849a9.458 9.458 0 0 1-8.74-5.848c-1.464-3.541-.655-7.617 2.05-10.327s6.774-3.521 10.308-2.053a9.475 9.475 0 0 1 5.837 8.756 9.48 9.48 0 0 1-2.768 6.7 9.446 9.446 0 0 1-6.687 2.775v-.003zm13.84-23.193v26.879h-4.371v-3.053c-5.489 5.165-14.093 4.985-19.362-.405-5.27-5.39-5.27-14.012 0-19.402 5.269-5.39 13.873-5.57 19.362-.405v-3.614h4.371zm34.849 1.021a2.152 2.152 0 0 1 1.841-1.035h.826a3.235 3.235 0 0 1 3.249 3.244v23.654H253V29.733a7195 7195 0 0 0-10.536 17.214l-.001.001-1.095 1.793a2.155 2.155 0 0 1-1.839 1.035h-.912a2.16 2.16 0 0 1-2.155-2.162V29.67c-2.411 3.898-9.81 16.012-12.139 19.891l-.121.201h-4.28V22.875h4.462v.055l-.102 18.547 10.681-17.564a2.156 2.156 0 0 1 1.841-1.035h.849c.859-.002 1.685.339 2.293.948s.949 1.435.948 2.296c0 3.255.01 8.271.018 11.691v.041l.006 3.521 10.624-17.462zm-78.583 25.842a13.822 13.822 0 0 0 15.614-4.975l-4.473-2.181a9.171 9.171 0 0 1-10.362 2.388 9.201 9.201 0 0 1-5.669-9.012 9.198 9.198 0 0 1 6.621-8.335 9.177 9.177 0 0 1 10.039 3.512l4.194-2.184a13.827 13.827 0 0 0-15.379-5.664 13.857 13.857 0 0 0-9.991 13.009 13.862 13.862 0 0 0 9.406 13.442zm101.21-3.645c-5.005.002-9.145-3.904-9.444-8.909v-1.14c.308-5.15 4.673-9.107 9.819-8.901s9.181 4.499 9.078 9.658c-.104 5.159-4.308 9.286-9.458 9.285l.005.007zm-9.444-19.613a13.765 13.765 0 0 1 9.439-3.735v.006a13.84 13.84 0 0 1 13.321 10.12c1.675 5.983-.83 12.352-6.128 15.583s-12.096 2.535-16.632-1.703v13.978h-4.365V22.892h4.365v3.605zm-138.713.594v16.531a1.78 1.78 0 0 0 1.775 1.778h5.087v4.373h-5.085a6.155 6.155 0 0 1-6.14-6.151V27.091h-4.728v-4.246h4.717v-7.368h4.374v7.368h7.76v4.246h-7.76zm12.448 13.145a9.457 9.457 0 0 0 8.738 5.85v.003a9.45 9.45 0 0 0 6.688-2.775 9.487 9.487 0 0 0-3.067-15.456 9.446 9.446 0 0 0-10.308 2.052 9.487 9.487 0 0 0-2.051 10.326zm18.207-17.339v3.608c-5.489-5.165-14.093-4.985-19.363.405-5.269 5.39-5.269 14.012 0 19.402 5.27 5.39 13.874 5.57 19.363.405v3.053h4.37V22.892l-4.37.005zM91.659 36.613c0 5.233 4.234 9.475 9.457 9.475 2.509.001 4.915-.997 6.689-2.774s2.77-4.188 2.769-6.701c0-5.233-4.234-9.475-9.458-9.475-5.223 0-9.457 4.242-9.457 9.475zm18.926-13.716v3.606c-5.489-5.164-14.093-4.983-19.361.407-5.269 5.39-5.269 14.011 0 19.401s13.872 5.571 19.361.407v3.053h4.371V22.892l-4.371.005zm50.535 30.568h-3.467v28.102h3.467V53.465zm-14.363 11.12a5.159 5.159 0 0 1 3.235 1.016v-.014c.84.628 1.466 1.5 1.792 2.498h3.662c-.273-2.374-3.04-6.902-8.689-6.902-5.531 0-9.78 4.599-9.78 10.298 0 5.698 4.247 10.303 9.777 10.303 5.377 0 8.298-4.685 8.612-6.869h-3.582a4.574 4.574 0 0 1-1.56 2.302 5.585 5.585 0 0 1-3.467 1.171c-3.701 0-6.311-3.122-6.311-6.902 0-3.778 2.572-6.901 6.311-6.901zm31.394 10.621c-.301 1.051-1.985 3.274-5.254 3.277-3.669-.003-5.797-2.459-6.147-5.853h15.3c.039-.431.077-.939.077-1.444 0-5.428-3.935-9.994-9.389-9.994-5.533 0-9.546 4.566-9.546 10.306 0 5.814 3.897 10.303 9.701 10.303 6.128 0 8.65-4.917 8.884-6.595h-3.626zm.482-5.425h-11.806c.584-3.045 2.728-5.27 5.922-5.27 3.271 0 5.377 2.302 5.884 5.27zm24.463-8.354v20.14h-3.467v-3.434c-1.483 2.264-3.858 3.669-7.013 3.669h-.039c-4.715 0-8.493-4.45-8.493-10.303 0-5.778 3.778-10.306 8.493-10.306h.039c3.155 0 5.53 1.405 7.013 3.669v-3.434h3.467v-.001zm-3.467 10.071c0-3.865-2.378-6.902-5.845-6.902h-.039c-3.858 0-6.195 2.926-6.195 6.902 0 4.058 2.376 6.902 6.195 6.902h.039c3.467 0 5.845-3.037 5.845-6.902zm16.132-10.187v3.396a13.11 13.11 0 0 0-1.868-.119c-2.806 0-5.222 1.756-5.222 5.698v11.281h-3.47v-20.14h3.467v2.849c1.168-1.833 2.882-3.084 5.145-3.084.65.004 1.299.043 1.945.119h.003zm-12.665 23.673v20.154h-3.467v-3.448c-1.483 2.264-3.858 3.669-7.013 3.669h-.039c-4.715 0-8.493-4.45-8.493-10.303 0-5.776 3.778-10.303 8.493-10.303h.039c3.155 0 5.53 1.405 7.013 3.666v-3.434l3.467-.001zm-3.467 10.072c0-3.865-2.378-6.902-5.845-6.902h-.039c-3.858 0-6.195 2.929-6.195 6.902 0 4.058 2.376 6.902 6.195 6.902h.039c3.467 0 5.845-3.037 5.845-6.902zm9.56 6.127a4.164 4.164 0 0 0 2.805 1.015c2.417 0 3.817-1.289 3.817-2.888 0-1.64-1.13-2.341-3.66-2.927l-2.182-.508c-2.481-.585-4.87-2.029-4.87-5.425 0-3.084 2.756-5.74 6.889-5.698 4.209.039 6.78 3.434 6.78 6.35h-3.346a3.097 3.097 0 0 0-1.053-2.303 3.452 3.452 0 0 0-2.414-.897c-2.025 0-3.428 1.052-3.428 2.485s.857 2.109 2.61 2.499l2.337.508c3.896.881 5.781 3.029 5.781 5.889 0 3.395-2.728 6.087-7.247 6.087-4.87 0-7.364-3.746-7.364-6.791h3.274a3.406 3.406 0 0 0 1.271 2.604zm-61.804 27.582h-3.469v-3.277A8.287 8.287 0 0 1 137.06 129c-4.715 0-8.689-4.528-8.689-10.304 0-5.775 3.974-10.303 8.689-10.303a8.262 8.262 0 0 1 6.856 3.589v-11.319h3.469v28.102zm-3.469-10.069c0-3.865-2.18-6.871-5.842-6.871-3.663 0-6.234 3.006-6.234 6.871s2.571 6.902 6.234 6.902c3.662 0 5.842-3.037 5.842-6.902zm24.457 10.083v-20.154h-3.469v3.434c-1.48-2.263-3.856-3.669-7.014-3.669h-.038c-4.713 0-8.493 4.528-8.493 10.306 0 5.853 3.78 10.304 8.493 10.304h.038c3.156 0 5.534-1.406 7.014-3.67v3.449h3.469zm-9.311-16.985c3.466 0 5.842 3.037 5.842 6.902s-2.376 6.902-5.842 6.902h-.039c-3.82 0-6.195-2.843-6.195-6.902 0-3.975 2.337-6.902 6.195-6.902h.039zm23.817 16.267v-3.277a5.74 5.74 0 0 1-2.888.897c-1.518 0-2.686-.624-2.686-2.418v-11.631h5.53v-3.007h-5.53v-5.66h-3.47v5.66h-3.428v3.007h3.434v11.747c0 3.511 2.571 5.621 5.806 5.621 1.168 0 2.232-.488 2.864-.777.148-.068.272-.125.368-.162zm20.217.718v-20.154h-3.467v3.434c-1.483-2.263-3.858-3.669-7.013-3.669h-.039c-4.715 0-8.493 4.528-8.493 10.306 0 5.853 3.778 10.304 8.493 10.304h.039c3.155 0 5.53-1.406 7.013-3.67v3.449h3.467zm-9.312-16.985c3.467 0 5.845 3.037 5.845 6.902s-2.378 6.902-5.845 6.902h-.039c-3.819 0-6.195-2.843-6.195-6.902 0-3.975 2.337-6.902 6.195-6.902h.039z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={textColor}
      />
      <path
        d="M20.428 15.165v13.862l-14.683 8.39V6.722l14.683 8.443zm4.745 29.126V31.795l19.671-11.239-4.781-2.761-14.881 8.506V13.784a2.388 2.388 0 0 0-1.193-2.065L6.076 1.424l-.143-.077C4.868.828 3.612.895 2.609 1.525S.998 3.258 1 4.444v35.244c-.002 1.186.607 2.288 1.61 2.917s2.259.696 3.323.177l.138-.072 14.357-8.205v11.167a2.39 2.39 0 0 0 1.201 2.071l18.4 10.491 4.784-2.761-19.64-11.182z"
        fillRule="evenodd"
        clipRule="evenodd"
        fill={logomarkColor}
      />
    </svg>
  );
}

export default DataCampLogoTagline;
