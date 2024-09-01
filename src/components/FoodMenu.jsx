import React from "react";
import mojito from "../img/mojito.jpg";
import lagoon from "../img/lagoon.jpg";

//te divi ku o Hero, provon edhe overflow-hidden

function FoodMenu() {
  return (
    <div className="menu-wrapper w-full">
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Pizza
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Margarita</h2>
              <h2 className="text-white">Sos domatesh dhe djath</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Suxhuk</h2>
              <h2 className="text-white">Sos domatesh, djath, suxhuk vici</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Funghi</h2>
              <h2 className="text-white">
                Sos domatesh, djath, kepurdha te freskta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Proshuto</h2>
              <h2 className="text-white">Sos domatesh, djath, proshute vici</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna</h2>
              <h2 className="text-white">Sos domatesh, djath, tuna</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Popeye</h2>
              <h2 className="text-white">
                Sos domatesh, mozzarella, djath feta, spinaqm veze
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Broccoli
              </h2>
              <h2 className="text-white">
                Sos domatesh, djath, brokoli, mish pule, salce hudhre
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Broccoli</h2>
              <h2 className="text-white">Sos domatesh, djath, brokoli</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={lagoon}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pepperoni</h2>
              <h2 className="text-white">
                Sos domatesh, djath, suxhuk i tymosur
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">6.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Quatro Stagioni
              </h2>
              <h2 className="text-white">
                Sos domatesh, djath, proshute vici, suxhuk vici, proshute pule
                dhe kepurdha te freskta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Rucola</h2>
              <h2 className="text-white">
                Sos domatesh, djath, rukola, proshute vici e tymosur, parmezan
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Chicken</h2>
              <h2 className="text-white">
                Sos domatesh, djath, proshute pule e tymosur
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sach</h2>
              <h2 className="text-white">
                Sos domatesh, djath, suxhuk, proshute vici, kepurdha te freskta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Quattro Formaggio
              </h2>
              <h2 className="text-white">
                Sos domatesh, djath, mozzarella, gorgonzola, krem djath
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">7.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mediterana</h2>
              <h2 className="text-white">
                Sos domatesh, djath feta, ullinj, domatini
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">6.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Vegetariana</h2>
              <h2 className="text-white">
                Sos domatesh, djath, domate, brokoli, kepurdha te freskta,
                speca, miser, qepe
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Katerkendeshe
              </h2>
              <h2 className="text-white">
                Cdo lloj pice mund te porositet ne kete forme
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Chicago Style Pizza
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pepperoni</h2>
              <h2 className="text-white">
                Sos domatesh, mozzarella, suxhuk i tymosur
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Bolognese</h2>
              <h2 className="text-white">
                Sos domatesh, mozzarella, mish i bluar vici boloneze
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Broccoli
              </h2>
              <h2 className="text-white">
                Sos domatesh, mozzarella, brokoli, mish pule, salce hudhre
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Primavera</h2>
              <h2 className="text-white">
                Sos domatesh, mozzarella, mish pule, kungulleshe, kepurdha te
                freskta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">BBQ Chicken</h2>
              <h2 className="text-white">
                Sos domatesh, mozzarella, mish pule, sos barbeque
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Classic</h2>
              <h2 className="text-white">
                Sos domatesh, mozzarella, proshute vici e tymosur, kepurdha te
                freskta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pomodoro</h2>
              <h2 className="text-white">Sos domatesh, mozzarella e fresket</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Salads and Soups
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Beef Salad</h2>
              <h2 className="text-white">
                Sallate e gjelber, mish vici i marinuar, domate, parmezan, qepe
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna Salad</h2>
              <h2 className="text-white">
                Sallate e gjelber, miser, qepe, ullinj, tuna
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Ceasar Salad</h2>
              <h2 className="text-white">
                Sallate e gjelber, djath, copeza te ferguara pule, miser,
                ullinj, karrote, domate, tranguj
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Caprese</h2>
              <h2 className="text-white">
                Domate, mozzarella, sallate e gjelber
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mediterana</h2>
              <h2 className="text-white">
                Sallate e gjelber, domate, djath feta, tranguj, qepe, ullinj
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tomato Soup</h2>
              <h2 className="text-white">Supe me domate</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Chicken Soup</h2>
              <h2 className="text-white">Supe me pule dhe perime</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Carrot Soup</h2>
              <h2 className="text-white">Supe me karrote</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            La Pasta
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Penne Bolognese
              </h2>
              <h2 className="text-white">
                Sos domatesh, mish i bluar boloneze
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Lasagna</h2>
              <h2 className="text-white">
                Sos domatesh, djath, mish i bluar boloneze
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Al Forno</h2>
              <h2 className="text-white">
                Sos domatesh, pasta penne, djath, salce kremi, mish pule
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Beef Linguini
              </h2>
              <h2 className="text-white">
                Linguini me mish vici dhe kepurdha te fresketa
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Alla Viennese
              </h2>
              <h2 className="text-white">
                Salce domatesh marinara, pule vieneze, domate dhe parmezan
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.50</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Risotto
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Primavera</h2>
              <h2 className="text-white">
                Speca, kepurdha, brokoli, miser, karrote
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Beef</h2>
              <h2 className="text-white">Rizoto me mish vici</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mushroom</h2>
              <h2 className="text-white">Rizoto me kepurdha te fresketa</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Veggie Chicken
              </h2>
              <h2 className="text-white">Rizoto me mish pule dhe perime</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Fast n'Tasty
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Fingers
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Escalope
              </h2>
              <h2 className="text-white">
                Pule vieneze, domate, mozzarella dhe pesto ne buke ciabatta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Burrito
              </h2>
              <h2 className="text-white">
                Mish pule, speca, oriz, salce kremi
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Tortilla
              </h2>
              <h2 className="text-white">
                Pule vieneze, ajvar, salce kremi, djath amerikan
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Quesadilla
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Spring Rolls</h2>
              <h2 className="text-white">Pete te skuqura ne vaj me perime</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Patate me Ereza
              </h2>
              <h2 className="text-white">
                Patate te skuqura me ereza dhe salce
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Sandwiches
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mix</h2>
              <h2 className="text-white">
                Sos domatesh, salce kremoze, djath, proshute, suxhuk
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pershute</h2>
              <h2 className="text-white">
                Sos domatesh, salce kremoze, djath, proshute
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Suxhuk</h2>
              <h2 className="text-white">
                Sos domatesh, salce kremoze, djath, suxhuk
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pule</h2>
              <h2 className="text-white">
                Sos domatesh, salce kremoze, djath, proshute pule
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna</h2>
              <h2 className="text-white">
                Sos domatesh, salce kremoze, djath, tuna
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Vegetarian</h2>
              <h2 className="text-white">
                Sos domatesh, salce kremoze, speca, kepurdha, brokoli, qepe,
                miser
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-content relative">
        <img
          src={mojito}
          alt="Cocktail Image"
          className="w-[1140px] h-[900px] md:w-full md:h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center gap-y-6">
          <p className="text-3xl md:text-5xl font-bold mx-auto text-white ">
            Burgers and Special Sandwiches
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sach Attack</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sachburger</h2>
              <h2 className="text-white">
                Mish vici, djath amerikan, domate, tranguj, qepe, bbq salce dhe
                patate te skuqura
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Supreme Burger
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Mini Pop Burgers
              </h2>
              <h2 className="text-white">3 mini burgers</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Club Sandwich
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Crunch
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna Melt</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Crispy Chicken
              </h2>
              <h2 className="text-white">With sourdough bread</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Salad Sandwich
              </h2>
              <h2 className="text-white">With sourdough bread</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoodMenu;
