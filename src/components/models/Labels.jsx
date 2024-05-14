import "./Overlay.css";

function Labels() {
  return (
    <div className="canvas__overflow">
      <div className="canvas__container">
        <section id="page1" className="canvas__section__presentation">
          <h1 className="title">
            Material <br />
            de <br /> Osteosíntesis.
          </h1>
          <div className="parragraph">
            <p>
              Descubra nuestra amplia gama de productos diseñados para
              satisfacer las necesidades más exigentes de los profesionales de
              la salud.
            </p>

            <button className="button-fill">Realizar recorrido</button>
          </div>
        </section>

        <section id="page2" className="canvas__section__description maxilo">
          <div className="item hidden" id="item1">
            <h3>Maxilofacial</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="548"
              height="100"
              viewBox="0 0 548 100"
              fill="none"
              className="arrow"
            >
              <path
                d="M542.333 97C542.333 95.5272 543.527 94.3333 545 94.3333C546.473 94.3333 547.667 95.5272 547.667 97C547.667 98.4728 546.473 99.6667 545 99.6667C543.527 99.6667 542.333 98.4728 542.333 97ZM427.608 1V0.500005H427.786L427.924 0.612948L427.608 1ZM544.683 97.3871L427.291 1.38706L427.924 0.612948L545.317 96.6129L544.683 97.3871ZM427.608 1.5H0V0.500005H427.608V1.5Z"
                fill="url(#paint0_linear_843_2)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_843_2"
                  x1="545"
                  y1="0.999998"
                  x2="3.99622"
                  y2="1.00002"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de osteosíntesis para procedimientos en la región
              facial superior, abordando de manera precisa la cirugía
              maxilofacial.
            </p>
          </div>

          <div className="item hidden" id="item2">
            <h3>Mandibula</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="400"
              height="83"
              viewBox="0 0 549 83"
              fill="none"
              className="arrow"
            >
              <path
                d="M543.333 3C543.333 4.47276 544.527 5.66667 546 5.66667C547.473 5.66667 548.667 4.47276 548.667 3C548.667 1.52724 547.473 0.333333 546 0.333333C544.527 0.333333 543.333 1.52724 543.333 3ZM428.5 82V82.5H428.652L428.779 82.4149L428.5 82ZM545.721 2.58506L428.221 81.5851L428.779 82.4149L546.279 3.41494L545.721 2.58506ZM428.5 81.5H0.5V82.5H428.5V81.5Z"
                fill="url(#paint0_linear_713_850)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_713_850"
                  x1="546"
                  y1="82"
                  x2="4.49989"
                  y2="82"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>Productos, placas para mandibula</p>
          </div>
        </section>

        <section id="page3" className="canvas__section__description columna">
          <div className="item hidden" id="item3">
            <h3>Columna</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="574"
              height="135"
              viewBox="0 0 574 135"
              fill="none"
              className="arrow"
            >
              <path
                d="M5.66667 132C5.66667 130.527 4.47276 129.333 3 129.333C1.52724 129.333 0.333333 130.527 0.333333 132C0.333333 133.473 1.52724 134.667 3 134.667C4.47276 134.667 5.66667 133.473 5.66667 132ZM281.761 1V0.5H281.649L281.548 0.547477L281.761 1ZM3.21266 132.453L281.973 1.45252L281.548 0.547477L2.78734 131.547L3.21266 132.453ZM281.761 1.5H574V0.5H281.761V1.5Z"
                fill="url(#paint0_linear_746_123)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_746_123"
                  x1="3"
                  y1="75.0114"
                  x2="600.163"
                  y2="75.0114"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones avanzadas de osteosíntesis diseñadas específicamente
              para procedimientos en la columna vertebral.
            </p>
          </div>
        </section>

        <section id="page4" className="canvas__section__description taracico">
          <div className="item hidden" id="item4">
            <h3>Torácico</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="420"
              height="72"
              viewBox="0 0 420 72"
              fill="none"
              className="arrow"
            >
              <path
                d="M414.333 69C414.333 67.5272 415.527 66.3333 417 66.3333C418.473 66.3333 419.667 67.5272 419.667 69C419.667 70.4728 418.473 71.6667 417 71.6667C415.527 71.6667 414.333 70.4728 414.333 69ZM292.06 1V0.5H292.187L292.299 0.560832L292.06 1ZM416.761 69.4392L291.821 1.43917L292.299 0.560832L417.239 68.5608L416.761 69.4392ZM292.06 1.5H0.5V0.5H292.06V1.5Z"
                fill="url(#paint0_linear_747_163)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_747_163"
                  x1="417"
                  y1="1.00018"
                  x2="-35"
                  y2="1.00008"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              soluciones de osteosíntesis diseñadas para procedimientos en la
              región torácica.
            </p>
          </div>

          <div className="item hidden" id="item5">
            <h3>Esternón</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="578"
              height="105"
              viewBox="0 0 578 105"
              fill="none"
              className="arrow"
            >
              <path
                d="M572.333 3C572.333 4.47276 573.527 5.66667 575 5.66667C576.473 5.66667 577.667 4.47276 577.667 3C577.667 1.52724 576.473 0.333333 575 0.333333C573.527 0.333333 572.333 1.52724 572.333 3ZM308.531 104V104.5H308.623L308.709 104.468L308.531 104ZM574.823 2.53246L308.354 103.532L308.709 104.468L575.177 3.46754L574.823 2.53246ZM308.531 103.5H0V104.5H308.531V103.5Z"
                fill="url(#paint0_linear_714_3)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_714_3"
                  x1="496"
                  y1="96.5006"
                  x2="-65.3797"
                  y2="104.328"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              soluciones de osteosíntesis diseñadas para procedimientos en la
              región torácica.
            </p>
          </div>
        </section>

        <section id="page5" className="canvas__section__description brazos">
          <div className="item hidden" id="item6">
            <h3>Clavicula</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="464"
              height="64"
              viewBox="0 0 464 64"
              fill="none"
              className="arrow"
            >
              <path
                d="M5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333333 4.47276 0.333333 3C0.333333 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3ZM121.27 63V63.5H121.15L121.043 63.4459L121.27 63ZM3.22621 2.5541L121.496 62.5541L121.043 63.4459L2.77379 3.4459L3.22621 2.5541ZM121.27 62.5H464V63.5H121.27V62.5Z"
                fill="url(#paint0_linear_714_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_714_4"
                  x1="2.99999"
                  y1="62.9999"
                  x2="565.5"
                  y2="63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>Placas y tornillos para procedimientos de clavícula.</p>
          </div>

          <div className="item hidden" id="item7">
            <h3>Brazo</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="376"
              height="64"
              viewBox="0 0 376 64"
              fill="none"
              className="arrow"
            >
              <path
                d="M5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333333 4.47276 0.333333 3C0.333333 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3ZM72 63V63.5H71.813L71.6719 63.3773L72 63ZM3.32809 2.6227L72.3281 62.6227L71.6719 63.3773L2.67191 3.3773L3.32809 2.6227ZM72 62.5H376V63.5H72V62.5Z"
                fill="url(#paint0_linear_714_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_714_4"
                  x1="2.99999"
                  y1="62.9999"
                  x2="458.125"
                  y2="63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#333333" />
                  <stop offset="1" stop-color="#333333" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>Placas y tornillos para procedimientos de brazo.</p>
          </div>

          <div className="item hidden" id="item8">
            <h3>Parte media</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="471"
              height="111"
              viewBox="0 0 471 111"
              fill="none"
              className="arrow"
            >
              <path
                d="M5.66667 3C5.66667 4.47276 4.47276 5.66667 3 5.66667C1.52724 5.66667 0.333333 4.47276 0.333333 3C0.333333 1.52724 1.52724 0.333333 3 0.333333C4.47276 0.333333 5.66667 1.52724 5.66667 3ZM122 110V110.5H121.808L121.666 110.372L122 110ZM3.33431 2.6282L122.334 109.628L121.666 110.372L2.66569 3.3718L3.33431 2.6282ZM122 109.5H471V110.5H122V109.5Z"
                fill="url(#paint0_linear_746_118)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_746_118"
                  x1="53.9999"
                  y1="217"
                  x2="503.5"
                  y2="217"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Sistema de placas y tornillos para procedimientos de la parte
              media del brazo.
            </p>
          </div>
        </section>

        <section id="page6" className="canvas__section__description cadera">
          <div className="item hidden" id="item9">
            <h3>Cadera</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="544"
              height="127"
              viewBox="0 0 544 127"
              fill="none"
              className="arrow"
            >
              <path
                d="M538.333 3C538.333 4.47276 539.527 5.66667 541 5.66667C542.473 5.66667 543.667 4.47276 543.667 3C543.667 1.52724 542.473 0.333333 541 0.333333C539.527 0.333333 538.333 1.52724 538.333 3ZM396.765 126V126.5H396.949L397.089 126.38L396.765 126ZM540.676 2.61955L396.44 125.62L397.089 126.38L541.324 3.38045L540.676 2.61955ZM396.765 125.5H0V126.5H396.765V125.5Z"
                fill="url(#paint0_linear_714_6)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_714_6"
                  x1="541"
                  y1="126"
                  x2="0"
                  y2="126"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de osteosíntesis diseñadas para procedimientos en la
              cadera.
            </p>
          </div>
        </section>

        <section id="page7" className="canvas__section__description mano">
          <div className="item hidden" id="item10">
            <h3>Muñeca</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="369"
              height="65"
              viewBox="0 0 369 65"
              fill="none"
              className="arrow"
            >
              <path
                d="M5.66665 3C5.66665 4.47276 4.47274 5.66667 2.99998 5.66667C1.52722 5.66667 0.333313 4.47276 0.333313 3C0.333313 1.52724 1.52722 0.333333 2.99998 0.333333C4.47274 0.333333 5.66665 1.52724 5.66665 3ZM91.6211 64V64.5H91.4656L91.3376 64.4119L91.6211 64ZM3.28347 2.58814L91.9045 63.5881L91.3376 64.4119L2.71648 3.41186L3.28347 2.58814ZM91.6211 63.5H369V64.5H91.6211V63.5Z"
                fill="url(#paint0_linear_714_12)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_714_12"
                  x1="-61.0877"
                  y1="64.0006"
                  x2="511.695"
                  y2="64.0006"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de sistemas de placas y tornillos para procedimientos
              de muñeca.
            </p>
          </div>

          <div className="item hidden" id="item11">
            <h3>Mano</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="439"
              height="121"
              viewBox="0 0 439 121"
              fill="none"
              className="arrow"
            >
              <path
                d="M433.333 3C433.333 4.47276 434.527 5.66667 436 5.66667C437.473 5.66667 438.667 4.47276 438.667 3C438.667 1.52724 437.473 0.333333 436 0.333333C434.527 0.333333 433.333 1.52724 433.333 3ZM319.759 120V120.5H319.967L320.113 120.352L319.759 120ZM435.645 2.6476L319.404 119.648L320.113 120.352L436.355 3.3524L435.645 2.6476ZM319.759 119.5H0V120.5H319.759V119.5Z"
                fill="url(#paint0_linear_714_13)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_714_13"
                  x1="436"
                  y1="120"
                  x2="0"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de sistemas de placas y tornillos para procedimientos
              de mano.
            </p>
          </div>
        </section>

        <section id="page8" className="canvas__section__description pierna">
          <div className="item hidden" id="item12">
            <h3>Fémur</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="440"
              height="75"
              viewBox="0 0 440 75"
              fill="none"
              className="arrow"
            >
              <path
                d="M5.66668 3C5.66668 4.47276 4.47277 5.66667 3.00001 5.66667C1.52725 5.66667 0.333346 4.47276 0.333346 3C0.333346 1.52724 1.52725 0.333333 3.00001 0.333333C4.47277 0.333333 5.66668 1.52724 5.66668 3ZM119.508 74V74.5H119.368L119.248 74.427L119.508 74ZM3.26021 2.57303L119.768 73.573L119.248 74.427L2.73982 3.42697L3.26021 2.57303ZM119.508 73.5H440V74.5H119.508V73.5Z"
                fill="url(#paint0_linear_746_142)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_746_142"
                  x1="3"
                  y1="74.0001"
                  x2="440"
                  y2="74.0001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de osteosíntesis diseñadas para procedimientos de
              fémur.
            </p>
          </div>

          <div className="item hidden" id="item13">
            <h3>Espinilla</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="364"
              height="82"
              viewBox="0 0 364 82"
              fill="none"
              className="arrow"
            >
              <path
                d="M358.333 79C358.333 77.5272 359.527 76.3333 361 76.3333C362.473 76.3333 363.667 77.5272 363.667 79C363.667 80.4728 362.473 81.6667 361 81.6667C359.527 81.6667 358.333 80.4728 358.333 79ZM264.754 1V0.500002H264.932L265.069 0.611551L264.754 1ZM360.685 79.3885L264.44 1.38845L265.069 0.611551L361.315 78.6115L360.685 79.3885ZM264.754 1.5H0V0.500002H264.754V1.5Z"
                fill="url(#paint0_linear_746_137)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_746_137"
                  x1="361"
                  y1="0.99989"
                  x2="0"
                  y2="0.99989"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de osteosíntesis diseñadas para procedimientos de
              espinilla.
            </p>
          </div>
        </section>

        <section id="page9" className="canvas__section__description pies">
          <div className="item hidden" id="item14">
            <h3>Tobillo</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="439"
              height="111"
              viewBox="0 0 439 111"
              fill="none"
              className="arrow"
            >
              <path
                d="M433.333 108C433.333 106.527 434.527 105.333 436 105.333C437.473 105.333 438.667 106.527 438.667 108C438.667 109.473 437.473 110.667 436 110.667C434.527 110.667 433.333 109.473 433.333 108ZM319.759 0.999996V0.499996H319.954L320.097 0.632122L319.759 0.999996ZM435.661 108.368L319.42 1.36787L320.097 0.632122L436.339 107.632L435.661 108.368ZM319.759 1.5H0V0.499996H319.759V1.5Z"
                fill="url(#paint0_linear_746_134)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_746_134"
                  x1="436"
                  y1="0.999849"
                  x2="0"
                  y2="0.999849"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de osteosíntesis diseñadas para procedimientos de
              tobillo.
            </p>
          </div>

          <div className="item hidden" id="item15">
            <h3>Pie</h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="470"
              height="94"
              viewBox="0 0 470 94"
              fill="none"
              className="arrow"
            >
              <path
                d="M5.66668 91C5.66668 89.5272 4.47277 88.3333 3.00001 88.3333C1.52725 88.3333 0.333343 89.5272 0.333343 91C0.333343 92.4728 1.52725 93.6667 3.00001 93.6667C4.47277 93.6667 5.66668 92.4728 5.66668 91ZM127.506 1V0.5H127.344L127.213 0.594782L127.506 1ZM3.29292 91.4052L127.799 1.40522L127.213 0.594782L2.7071 90.5948L3.29292 91.4052ZM127.506 1.5H470V0.5H127.506V1.5Z"
                fill="url(#paint0_linear_746_133)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_746_133"
                  x1="3"
                  y1="0.999873"
                  x2="470"
                  y2="0.999873"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#333333" />
                  <stop offset="1" stopColor="#333333" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <p>
              Soluciones de osteosíntesis diseñadas para procedimientos de pie.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Labels;
