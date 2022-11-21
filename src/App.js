import './App.css';

import React from 'react';
import Table from './Table';

function App() {
   const users = [
      {
         name: 'Ramazan',
         surName: 'Dogan',
         email: 'ramazan0@gmail.com',
         age: '23',
      },
      {
         name: 'Emrullah',
         surName: 'Yurt',
         email: 'emrullahrze@gmail.com',
         age: '19',
      },
      {
         name: 'Volkan',
         surName: 'Van',
         email: 'volkanvan24@gmail.com',
         age: '20',
      },
      {
         name: 'Neymar',
         surName: 'De Souza',
         email: 'neymar@gmail.com',
         age: '26',
      },
   ];

   return (
      <div className="p-4">
         <Table
            searchable={true}
            head={[
               { name: 'Ad-Soyad', sortable: 'true' },
               { name: 'E-posta' },
               { name: 'Yaş', sortable: 'true' },
               { name: 'İşlemler', width: '200px' },
            ]}
            body={users.map((user) => [
               `${user.name} $${user.surName} `,
               user.email,
               user.age,
               [
                  <button className="h-8 px-4 flex items-center rounded bg-blue-500 text-white">
                     düzenle
                  </button>,
                  <button className="h-8 px-4 flex items-center rounded bg-red-400 text-white">
                     sil
                  </button>,
               ],
            ])}
         />
      </div>
   );
}

export default App;
