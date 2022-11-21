export default function TableMobile({ head, body }) {
   return (
      <div className="border raunded p-4">
         {head.map((h, key) => (
            <section>
               <h6 className="text-sm font-semibold text-gray-500 mb-2">
                  {h.name}
               </h6>
            </section>
         ))}
      </div>
   );
}
