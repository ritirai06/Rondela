import { motion } from 'framer-motion';

export const AuroraBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative h-screen w-full bg-[#0a0f1c] overflow-hidden flex flex-col items-center justify-center">
      {/* Abstract Glowing Orbs for Aurora Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -150, 100, 0],
            y: [0, 100, -150, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/20 blur-[150px]"
        />
        <motion.div
          animate={{
            x: [0, 200, -200, 0],
            y: [0, 200, -200, 0],
            scale: [1, 1.5, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[30%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[100px]"
        />
      </div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </div>
  );
};
