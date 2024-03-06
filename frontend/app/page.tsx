


import Heatmap from './Heatmap';



interface Score {
  subject: string;
  marks: number;
}

const Heatmapi: React.FC<{ data: Score[] }> = async() => {
  
  
  const hmData:any = (await fnFetch()).props.data;

  return (
    <div className='m-10'>
      
      {hmData&&<Heatmap data={hmData as any} />}
    </div>
  );
};



export const fnFetch = async () => {
  
  const response = await fetch('http://localhost:3000/');
  const data = await response.json();

  return {
    props: { data },
  };
};

export default Heatmapi;
