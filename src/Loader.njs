import Nullstack from 'nullstack';
import Cog from 'poisonicon/cog/stroke';

class Loader extends Nullstack {
  
  render({worker}) {
    if(!worker.fetching) return false;
    return (
      <div class="w-full z-50 fixed top-0 left-0 h-screen flex items-center justify-center bg-opacity-95 bg-white">
        <Cog animation="spin" speed="slow" height={40} class="text-gray-800" />
      </div>
    )
  }

}

export default Loader;