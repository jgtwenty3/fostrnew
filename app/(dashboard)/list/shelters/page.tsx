import { getAllShelters } from '@/app/actions';
import Table from '@/components/Table';
import { createClient } from '@/utils/supabase/server';

type shelter = {
  id:string,
  name:string,
  email:string,
  phone:string,
  street_address:string, 
  city:string,
  state:string,
  zipcode:string, 
  

}

const SheltersPage = async () => {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  console.log(user);

  const shelterData = await getAllShelters();
  console.log(shelterData)

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "E-mail", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Address", accessor: "street_address" },
    { header: "City", accessor: "city" },
    { header: "State", accessor: "state" },
    { header: "Zipcode", accessor: "zipcode" },


    
    // Add other necessary columns here
  ];

  const renderRow = (shelter:shelter) => (
    <tr key={shelter.id} className='border-2 border-darkBlue even:bg-lightBlue hover:bg-fostrBlue'>
      <td className='text-darkBlue "flex items-center gap-4 p-4" '>{shelter.name}</td>
      <td className='text-darkBlue'>{shelter.email}</td>
      <td className='text-darkBlue'>{shelter.phone}</td>
      <td className='text-darkBlue'>{shelter.street_address}</td>
      <td className='text-darkBlue'>{shelter.city}</td>
      <td className='text-darkBlue'>{shelter.state}</td>
      <td className='text-darkBlue'>{shelter.zipcode}</td>
      
      
    </tr>
  );

  return (
    <div className='p-4 rounded-md flex-1 m-4 mt-0'>
      <Table columns={columns} data={shelterData} renderRow={renderRow} />
    </div>
  );
};

export default SheltersPage;
