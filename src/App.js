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
         email: 'emrullah3131@gmail.com',
         age: '22',
      },
      {
         name: 'Volkang',
         surName: 'Appo',
         email: 'aleyaey@gmail.com',
         age: '31',
      },
   ];

   return (
      <div className="p-4">
         <Table
            searchable={true}
            head={['Ad', 'Soyad', 'Yaş']}
            body={users.map((user) => [user.name, user.email, user.age])}
         />
      </div>
   );
}

export default App;
