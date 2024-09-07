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
              <h2 className="text-white text-xs">Sos domatesh dhe djath</h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">2.50€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">5.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">8.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Suxhuk</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, suxhuk viçi
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Funghi</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, këpurdha të freskëta
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Proshuto</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, proshutë viçi
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna</h2>
              <h2 className="text-white text-xs">Sos domatesh, djath, tuna</h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.50€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Popeye</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella, djath feta, spinaq, vezë
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.50€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Broccoli
              </h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, brokoli, mish pule, salcë hudhre
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.50€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Broccoli</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, brokoli
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">5.50€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
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
              <h2 className="text-white text-xs">
                Sos domatesh, djath, suxhuk i tymosur
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Quatro Stagioni
              </h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, proshutë viçi, suxhuk viçi, proshutë pule
                dhe këpurdha të freskëta
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Rucola</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, rukola, proshutë viçi e tymosur, parmezan
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.50€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Chicken</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, proshutë pule e tymosur
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sach</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, suxhuk, proshutë viçi, këpurdha të freskëta
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Quattro Formaggio
              </h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, mozzarella, gorgonzola, krem djath
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mediterana</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath feta, ullinj, domatini
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">6.00€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Vegetariana</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, domate, brokoli, këpurdha të freskëta,
                speca, misër, qepë
              </h2>
            </div>
            <div className="ml-3 flex gap-x-3 md:gap-x-8">
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">3.00€</h2>
                <h2 className="text-white text-xs">22cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">5.50€</h2>
                <h2 className="text-white text-xs">32cm</h2>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-white font-bold text-xl">9.00€</h2>
                <h2 className="text-white text-xs">42cm</h2>
              </div>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Katërkëndëshe
              </h2>
              <h2 className="text-white text-xs">
                Çdo lloj pice mund të porositet në këtë formë
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
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
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella, suxhuk i tymosur
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Bolognese</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella, mish i bluar viçi boloneze
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Broccoli
              </h2>
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella, brokoli, mish pule, salcë hudhre
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Primavera</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella, mish pule, kungulleshë, këpurdha të
                freskëta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">BBQ Chicken</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella, mish pule, sos barbeque
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Classic</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella, proshutë viçi e tymosur, këpurdha të
                freskëta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pomodoro</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, mozzarella e freskët
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
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
              <h2 className="text-white text-xs">
                Sallatë e gjelbër, mish viçi i marinuar, domate, parmezan, qepë
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna Salad</h2>
              <h2 className="text-white text-xs">
                Sallatë e gjelbër, misër, qepë, ullinj, tuna
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Ceasar Salad</h2>
              <h2 className="text-white text-xs">
                Sallatë e gjelbër, djath, copëza të fërguara pule, misër,
                ullinj, karrotë, domate, tranguj
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Caprese</h2>
              <h2 className="text-white text-xs">
                Domate, mozzarella, sallatë e gjelbër
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mediterana</h2>
              <h2 className="text-white text-xs">
                Sallatë e gjelbër, domate, djath feta, tranguj, qepë, ullinj
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tomato Soup</h2>
              <h2 className="text-white text-xs">Supë me domate</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Chicken Soup</h2>
              <h2 className="text-white text-xs">Supë me pulë dhe perime</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Carrot Soup</h2>
              <h2 className="text-white text-xs">Supë me karrotë</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.50€</h2>
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
              <h2 className="text-white text-xs">
                Sos domatesh, mish i bluar boloneze
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Lasagna</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, djath, mish i bluar boloneze
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Al Forno</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, pasta penne, djath, salcë kremi, mish pule
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Beef Linguini
              </h2>
              <h2 className="text-white text-xs">
                Linguini me mish viçi dhe këpurdha të freskëta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.50€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Alla Viennese
              </h2>
              <h2 className="text-white text-xs">
                Salcë domatesh marinara, pulë vieneze, domate dhe parmezan
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.00€</h2>
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
              <h2 className="text-white text-xs">
                Speca, këpurdha, brokoli, misër, karrotë
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Beef</h2>
              <h2 className="text-white text-xs">Rizoto me mish viçi</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">6.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Mushroom</h2>
              <h2 className="text-white text-xs">
                Rizoto me këpurdha të freskëta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Veggie Chicken
              </h2>
              <h2 className="text-white text-xs">
                Rizoto me mish pule dhe perime
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">5.50€</h2>
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
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Escalope
              </h2>
              <h2 className="text-white text-xs">
                Pulë vieneze, domate, mozzarella dhe pesto në bukë ciabatta
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Burrito
              </h2>
              <h2 className="text-white text-xs">
                Mish pule, speca, oriz, salcë kremi
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Tortilla
              </h2>
              <h2 className="text-white text-xs">
                Pulë vieneze, ajvar, salcë kremi, djath amerikan
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Quesadilla
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Spring Rolls</h2>
              <h2 className="text-white text-xs">
                Petë të skuqura në vaj me perime
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">3.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Patate me Erëza
              </h2>
              <h2 className="text-white text-xs">
                Patate të skuqura me erëza dhe salcë
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.50€</h2>
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
              <h2 className="text-white text-xs">
                Sos domatesh, salcë kremoze, djath, proshutë, suxhuk
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.80€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Përshutë</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, salcë kremoze, djath, proshutë
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.80€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Suxhuk</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, salcë kremoze, djath, suxhuk
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.80€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Pule</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, salcë kremoze, djath, proshutë pule
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.80€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, salcë kremoze, djath, tuna
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.80€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Vegetarian</h2>
              <h2 className="text-white text-xs">
                Sos domatesh, salcë kremoze, speca, këpurdha, brokoli, qepë,
                misër
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">2.80€</h2>
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
          <p className="text-3xl md:text-5xl font-bold text-center mx-auto text-white ">
            Burgers and Special Sandwiches
          </p>

          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sach Attack</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Sachburger</h2>
              <h2 className="text-white text-xs">
                Mish viçi, djath amerikan, domate, tranguj, qepë, bbq salcë dhe
                patate të skuqura
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Supreme Burger
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Mini Pop Burgers
              </h2>
              <h2 className="text-white text-xs">3 mini burgers</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.60€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Club Sandwich
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Crunch
              </h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">Tuna Melt</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Crispy Chicken
              </h2>
              <h2 className="text-white text-xs">With sourdough bread</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
          <div className="flex items-center px-3 md:px-64 justify-between">
            <div className="flex flex-col">
              <h2 className="text-white text-xl font-semibold">
                Chicken Salad Sandwich
              </h2>
              <h2 className="text-white text-xs">With sourdough bread</h2>
            </div>
            <div className="ml-3">
              <h2 className="text-white font-bold text-xl">4.00€</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FoodMenu;
