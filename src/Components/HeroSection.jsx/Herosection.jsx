import { motion } from 'framer-motion'; 
import img from '../../utils/imgkaran.jpg'

const Herosection = () => {
  return (
    <div className='relative flex justify-center items-center bg-blue-500'>
      
    
      <motion.div
        className="absolute flex justify-center items-center h-72 w-72 rounded-full bg-white shadow-lg"
        style={{ top: '50%', left: '40%', transform: 'translate(-50%, -50%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div><img className='object-cover h-64 w-64 rounded-full' src={img} alt="" /></div>
      </motion.div>
      
  
      <div className='flex min-w-full h-screen'>
        
    
        <div className='bg-green-500 w-2/5 p-8'>
          <h1 className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quia, ipsa optio eos voluptate veniam qui impedit. Suscipit fuga, accusantium fugiat, cum ut perspiciatis odit, saepe quia similique at quae?
          </h1>
        </div>

    
        <div className='bg-black text-white w-3/5 p-8'>
          <h1 className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum ipsam deserunt aliquam incidunt beatae omnis, debitis nulla? Mollitia facilis earum veritatis impedit qui explicabo dolores! Molestias dolor alias explicabo enim perferendis culpa eum, debitis est suscipit animi at inventore ducimus sapiente cum dolores similique voluptatibus! Veniam voluptatum alias non inventore dolores repellat exercitationem aut! Nam vel deleniti fugiat fuga iste non dolorum fugit perferendis a repudiandae, necessitatibus veniam reiciendis tenetur qui similique, corrupti laborum tempora totam aliquid suscipit est, deserunt facere quibusdam quasi. Odit ipsam sed eos adipisci repudiandae, dolores nulla non aliquam illo similique sint, eaque pariatur unde omnis?
          </h1>
        </div>

      </div>
    </div>
  );
};

export default Herosection;
