import { FaSort, FaSortDown, FaSortUp, FaSortup } from 'react-icons/fa';
import React, { useState } from 'react';

// import TableMobile from './table-mobile';

// import { useMediaQuery } from 'react-responsive';

function Table({ head, body, searchable }) {
   const [search, setSearch] = useState('');
   const [sorting, setSorting] = useState({});

   const filteredData =
      body &&
      body
         .filter((items) =>
            items.some((item) =>
               (item?.key || item?.props?.searchableText || item)
                  .toString()
                  .toLocaleLowerCase('TR')
                  .includes(search.toLocaleLowerCase('TR'))
            )
         )
         .sort((a, b) => {
            if (sorting?.orderBy === 'asc') {
               return (
                  a[sorting.key]?.key ||
                  a[sorting.key]?.props?.searchableText ||
                  a[sorting.key]
               )
                  .toString()
                  .localeCompare(
                     b[sorting.key]?.key ||
                        b[sorting.key]?.props?.searchableText ||
                        b[sorting.key]
                  );
            }
            if (sorting?.orderBy === 'desc') {
               return b[sorting.key].toString().localeCompare(a[sorting.key]);
            }
         });

   // if (isMobile) {
   //    return <TableMobile head={head} />;
   // }

   return (
      <>
         <pre>{JSON.stringify(sorting, null, 2)}</pre>
         {searchable && (
            <div className="mb-4">
               <input
                  onClick={setSorting({})}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  placeholder="Tabloda Ara"
                  className="h-10 border outline-none focus:border-black rounded text-sm px-4 w-full border-gray-300"
               />
               {sorting && (
                  <button className="h-10 rounded whitespace-nowrap border border-red-500 text-red-500 text-sm px-4">
                     Sıralama İptal
                  </button>
               )}
            </div>
         )}
         {search}
         <div className="w-full border rounded p4">
            <table className="w-full">
               <thead>
                  <tr>
                     {head.map((h, key) => (
                        <th
                           width={h.width}
                           className="text-left text-sm font-semibold text-gray-500 p-3 border-b "
                           key={key}
                        >
                           <div className="inline-flex items-center gap-x-2">
                              {h.name}
                              {h.sortable && (
                                 <button
                                    onClick={() => {
                                       if (sorting?.key === key) {
                                          setSorting({
                                             key,
                                             orderBy:
                                                sorting?.orderBy === 'asc'
                                                   ? 'desc'
                                                   : 'asc',
                                          });
                                       } else {
                                          setSorting({
                                             key,
                                             orderBy: 'asc',
                                          });
                                       }
                                    }}
                                 >
                                    {sorting?.key === key &&
                                       (sorting.orderBy === 'asc' ? (
                                          <FaSortDown size={14} />
                                       ) : (
                                          <FaSortUp size={14} />
                                       ))}
                                    {sorting?.key !== key && (
                                       <FaSort size={14} />
                                    )}
                                 </button>
                              )}
                           </div>
                        </th>
                     ))}
                  </tr>
               </thead>
               <tbody>
                  {filteredData.map((items, key) => (
                     <tr className="group" key={key}>
                        {items.map((item, key) => (
                           <td
                              className="p-3 text-sm group-hover:bg-blue-50 group-hover:text-blue-600"
                              key={key}
                           >
                              {Array.isArray(item) ? (
                                 <div className="flex gap-x-2">{item}</div>
                              ) : (
                                 item
                              )}
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
