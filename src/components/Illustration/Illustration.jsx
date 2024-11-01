import illustrationImage from '../../assets/images/6607.jpg';


const Illustration = () => (
  <div className="w-full h-full flex items-center justify-center">
    <img 
      src={illustrationImage} 
      alt="Registration Illustration" 
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

export default Illustration;