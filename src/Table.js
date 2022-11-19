import React, { useState } from 'react';

function Table({ head, body, searchable }) {
   const [search, setSearch] = useState('');

   return (
      <>
         {searchable && (
            <div className="mb-4">
               <input
                  type="text"
                  placeholder="Tabloda Ara"
                  className="h-10 border rounded text-sm px-4 w-full border-gray-300"
               />
            </div>
         )}
         <div className="w-full border rounded p4">
            <table className="w-full">
               <thead>
                  <tr>
                     {head.map((h, key) => (
                        <th className="text-left text-sm font-semibold text-gray-500 p-3 border-b " key={key}>
                           {h}
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {body.map((items, key) => (
                     <tr className="group" key={key}>
                        {items.map((item, key) => (
                           <td className="p-3 text-sm group-hover:bg-blue-50 group-hover:text-blue-600" key={key}>
                              {item}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </>
   );
}

export default Table;
