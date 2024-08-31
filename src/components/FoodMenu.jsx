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
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Suxhuk</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Funghi</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Proshuto</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna</h2>
              <h2 className="text-white">Dredhze, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Popeye</h2>
              <h2 className="text-white">
                Vodka, Cointreau, Portokall, Cranberry
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
              <h2 className="text-white">Cranberry, Portokall</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Broccoli</h2>
              <h2 className="text-white">Tequilla, Lime Juice, Cointreau</h2>
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
                Rum, Vodka, Gin, Tequilla, Cointreau, CocaCola, Lime Juice
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
              <h2 className="text-white">Malibu, Cranberry, Ananas Juice</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Rucola</h2>
              <h2 className="text-white">Rum, Coconut, Ananas Juice</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Chicken</h2>
              <h2 className="text-white">Vodka, Blue Curacao, Lemonade</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sach</h2>
              <h2 className="text-white">Jagermaister, Malibu, Ananas Juice</h2>
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
                Vodka, Gin, Cointreau, Rum, Schnapps
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">7.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mediterana</h2>
              <h2 className="text-white">Whiskey, Lemon Juice, Simple Sirup</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">6.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Vegetariana</h2>
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
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Bolognese</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
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
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Primavera</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">BBQ Chicken</h2>
              <h2 className="text-white">Dredhze, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Classic</h2>
              <h2 className="text-white">
                Vodka, Cointreau, Portokall, Cranberry
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pomodoro</h2>
              <h2 className="text-white">Cranberry, Portokall</h2>
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
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna Salad</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Ceasar Salad</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Caprese</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mediterana</h2>
              <h2 className="text-white">Dredhze, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tomato Soup</h2>
              <h2 className="text-white">
                Vodka, Cointreau, Portokall, Cranberry
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.50</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Chicken Soup</h2>
              <h2 className="text-white">Cranberry, Portokall</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">3.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Carrot Soup</h2>
              <h2 className="text-white">Cranberry, Portokall</h2>
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
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Lasagna</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Al Forno</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Dredhze, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Beef</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mushroom</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
                Chicke Fingers
              </h2>
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
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
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
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
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Spring Rolls</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pershute</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Suxhuk</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pule</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Vegetarian</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Aperol, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">5.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sachburger</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Supreme</h2>
              <h2 className="text-white">Campari, Cinzano, Uje Mineral</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white">4.00</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna Melt</h2>
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
              <h2 className="text-white">Rum, Lime, Mente, Sprite</h2>
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
