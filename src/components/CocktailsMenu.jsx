import React from "react";
import mojito from "../img/mojito.jpg";
import lagoon from "../img/lagoon.jpg";

//te divi ku o Hero, provon edhe overflow-hidden

function CocktailsMenu() {
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
            Cocktails
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Aperol Spritz
              </h2>
              <h2 className="text-white text-xs">
                Aperol, Cinzano, Ujë Mineral
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Campari Soda</h2>
              <h2 className="text-white text-xs">
                Campari, Cinzano, Ujë Mineral
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Negroni</h2>
              <h2 className="text-white text-xs">
                Campari, Cinzano, Ujë Mineral
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mojito</h2>
              <h2 className="text-white text-xs">Rum, Lime, Mentë, Sprite</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Mojito pa Alkool
              </h2>
              <h2 className="text-white text-xs">
                Dredhzë, Lime, Mentë, Sprite
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">3.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Sex On The Beach
              </h2>
              <h2 className="text-white text-xs">
                Vodka, Cointreau, Portokall, Cranberry
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Sex On The Beach pa Alkool
              </h2>
              <h2 className="text-white text-xs">Cranberry, Portokall</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">3.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Margarita</h2>
              <h2 className="text-white text-xs">
                Tequilla, Lime Juice, Cointreau
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
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
              <h2 className="text-white text-xl font-semibold">
                Long Island Ice Tea
              </h2>
              <h2 className="text-white text-xs">
                Rum, Vodka, Gin, Tequilla, Cointreau, CocaCola, Lime Juice
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Malibu Bay Breeze
              </h2>
              <h2 className="text-white text-xs">
                Malibu, Cranberry, Ananas Juice
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pina Colada</h2>
              <h2 className="text-white text-xs">Rum, Coconut, Ananas Juice</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Blue Lagoon</h2>
              <h2 className="text-white text-xs">
                Vodka, Blue Curacao, Lemonade
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                The Surfer On Acid
              </h2>
              <h2 className="text-white text-xs">
                Jagermaister, Malibu, Ananas Juice
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Irish Trash Can
              </h2>
              <h2 className="text-white text-xs">
                Vodka, Gin, Cointreau, Rum, Schnapps
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">7.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Whiskey Sour</h2>
              <h2 className="text-white text-xs">
                Whiskey, Lemon Juice, Simple Sirup
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Cocktail Pa Alkool
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">3.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Cosmopolitan</h2>
              <h2 className="text-white text-xs">
                Vodka, Cranberry, Cointreau, Lime Juice
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Rose Piscine</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">3.50€</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CocktailsMenu;
