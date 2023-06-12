import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './config/particlesConfigDay'


const ParticlesBagraund: React.FC = () => {

  const particlesInitit:any = useCallback((engine:any) => {
    loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        options={particlesConfig}
        init={particlesInitit}
      />
    </div>
  );
};

export default ParticlesBagraund;
