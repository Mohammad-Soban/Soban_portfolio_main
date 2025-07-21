import React from 'react';
import { MousePosition } from '../../types/portfolio';

interface HeroBackgroundProps {
  mousePosition: MousePosition;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ mousePosition }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large Animated Data Visualizations */}
      {[...Array(12)].map((_, i) => {
        const visualTypes = ['heatmap', 'scatter', 'neural', 'matrix', 'pipeline', 'algorithm'];
        const type = visualTypes[i % visualTypes.length];
        const size = Math.random() * 60 + 40; // 40-100px

        return (
          <div
            key={i}
            className="absolute opacity-30 animate-float"
            style={{
              left: `${Math.random() * 85 + 5}%`,
              top: `${Math.random() * 85 + 5}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 16}s`,
              transform: `scale(${0.8 + Math.random() * 0.4})`,
            }}
          >
            {type === 'heatmap' && (
              <div className="relative" style={{ width: size, height: size * 0.75 }}>
                <div className="grid grid-cols-6 gap-1 h-full">
                  {[...Array(24)].map((_, idx) => {
                    const intensity = Math.random();
                    return (
                      <div
                        key={idx}
                        className="rounded-sm animate-pulse"
                        style={{
                          backgroundColor: `rgba(248, 232, 200, ${intensity * 0.8})`,
                          animationDelay: `${idx * 0.05}s`,
                          animationDuration: `${2 + intensity}s`
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}

            {type === 'scatter' && (
              <svg width={size} height={size} className="animate-pulse">
                {[...Array(15)].map((_, idx) => (
                  <circle
                    key={idx}
                    cx={Math.random() * size}
                    cy={Math.random() * size}
                    r={Math.random() * 4 + 1}
                    fill={`rgba(${248 - Math.random() * 30}, ${232 - Math.random() * 20}, 200, ${0.6 + Math.random() * 0.4})`}
                    className="animate-ping"
                    style={{
                      animationDelay: `${idx * 0.2}s`,
                      animationDuration: `${3 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </svg>
            )}

            {type === 'neural' && (
              <div className="relative" style={{ width: size, height: size }}>
                {/* Neural Network Visualization */}
                <svg width={size} height={size} className="absolute inset-0">
                  {/* Connections */}
                  {[...Array(8)].map((_, idx) => (
                    <line
                      key={idx}
                      x1={Math.random() * size}
                      y1={Math.random() * size}
                      x2={Math.random() * size}
                      y2={Math.random() * size}
                      stroke="rgba(240, 223, 167, 0.4)"
                      strokeWidth="1"
                      className="animate-pulse"
                      style={{ animationDelay: `${idx * 0.3}s` }}
                    />
                  ))}
                  {/* Nodes */}
                  {[...Array(12)].map((_, idx) => (
                    <circle
                      key={idx}
                      cx={Math.random() * size}
                      cy={Math.random() * size}
                      r={Math.random() * 3 + 2}
                      fill="rgba(248, 232, 200, 0.8)"
                      className="animate-ping"
                      style={{
                        animationDelay: `${idx * 0.1}s`,
                        animationDuration: `${2 + Math.random() * 3}s`
                      }}
                    />
                  ))}
                </svg>
              </div>
            )}

            {type === 'matrix' && (
              <div className="grid grid-cols-8 gap-px" style={{ width: size, height: size * 0.8 }}>
                {[...Array(32)].map((_, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-amber-300 to-yellow-400 opacity-40 animate-pulse"
                    style={{
                      animationDelay: `${idx * 0.02}s`,
                      animationDuration: `${1 + Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            )}

            {type === 'pipeline' && (
              <div className="flex items-center space-x-2" style={{ width: size * 1.2 }}>
                {[...Array(5)].map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-6 h-6 rounded bg-gradient-to-r from-amber-400 to-yellow-300 opacity-50 animate-pulse"
                         style={{ animationDelay: `${idx * 0.5}s` }} />
                    {idx < 4 && (
                      <div className="w-4 h-0.5 bg-amber-300 opacity-40 animate-pulse"
                           style={{ animationDelay: `${idx * 0.5 + 0.25}s` }} />
                    )}
                  </div>
                ))}
              </div>
            )}

            {type === 'algorithm' && (
              <div className="space-y-1" style={{ width: size }}>
                {['if (x > 0)', '  return y', 'else:', '  calc()'].map((line, idx) => (
                  <div
                    key={idx}
                    className="text-xs font-mono text-amber-600 opacity-40 animate-pulse"
                    style={{
                      animationDelay: `${idx * 0.3}s`,
                      fontSize: `${8 + Math.random() * 4}px`
                    }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}

            {/* Enhanced Mathematical & Data Science Elements */}
      {[
        { symbol: '∑', formula: 'x²' },
        { symbol: '∫', formula: 'dx' },
        { symbol: 'μ', formula: '±σ' },
        { symbol: '∂', formula: '/∂x' },
        { symbol: 'λ', formula: 'ML' },
        { symbol: '∇', formula: 'f(x)' },
        { symbol: 'θ', formula: 'opt' },
        { symbol: 'α', formula: '0.01' },
        { symbol: 'β', formula: 'reg' },
        { symbol: 'γ', formula: 'dist' }
      ].map((item, i) => (
        <div
          key={item.symbol}
          className="absolute font-bold opacity-25 animate-float"
          style={{
            left: `${Math.random() * 85 + 5}%`,
            top: `${Math.random() * 85 + 5}%`,
            animationDelay: `${i * 1.5}s`,
            animationDuration: `${15 + Math.random() * 15}s`,
            fontSize: `${20 + Math.random() * 16}px`,
            color: `rgba(248, 232, 200, ${0.4 + Math.random() * 0.4})`
          }}
        >
          <div className="flex items-center space-x-1">
            <span className="text-amber-400">{item.symbol}</span>
            <span className="text-xs text-yellow-500 opacity-70">{item.formula}</span>
          </div>
        </div>
      ))}

      {/* Floating Data Tables */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`table-${i}`}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${i * 3}s`,
            animationDuration: `${20 + Math.random() * 10}s`,
          }}
        >
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded p-2 text-xs">
            <div className="grid grid-cols-3 gap-1 text-amber-800">
              <div>X</div><div>Y</div><div>Z</div>
              <div>0.8</div><div>0.2</div><div>0.9</div>
              <div>0.3</div><div>0.7</div><div>0.1</div>
            </div>
          </div>
        </div>
      ))}

            {/* Advanced Data Grid with Analytics Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(248, 232, 200, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(248, 232, 200, 0.4) 1px, transparent 1px),
            radial-gradient(circle at 25% 25%, rgba(240, 223, 167, 0.1) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(248, 232, 200, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px, 30px 30px, 60px 60px, 90px 90px",
        }}
      />

      {/* Dynamic Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-amber-400 rounded-full opacity-30 animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Large Background Equations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl font-thin text-amber-200 opacity-10 animate-pulse">
          E = mc²
        </div>
        <div className="absolute bottom-20 right-20 text-5xl font-thin text-yellow-200 opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
          ∇²φ = ρ
        </div>
        <div className="absolute top-1/2 left-1/4 text-4xl font-thin text-amber-300 opacity-10 animate-pulse" style={{ animationDelay: '4s' }}>
          f(x) = Σwᵢxᵢ
        </div>
      </div>

                  {/* Enhanced Interactive Analytics Cursor Effect */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-25 pointer-events-none transition-all duration-700"
        style={{
          background:
            "radial-gradient(circle, rgba(248, 232, 200, 0.9), rgba(240, 223, 167, 0.6), rgba(255, 215, 0, 0.3), transparent)",
          left: mousePosition.x - 250,
          top: mousePosition.y - 250,
        }}
      />

      {/* Advanced Neural Network Visualization */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Network Nodes */}
        {[...Array(8)].map((_, i) => {
          const positions = [
            { x: '20%', y: '20%' }, { x: '80%', y: '25%' }, { x: '25%', y: '70%' },
            { x: '75%', y: '75%' }, { x: '50%', y: '30%' }, { x: '30%', y: '50%' },
            { x: '70%', y: '50%' }, { x: '50%', y: '80%' }
          ];
          return (
            <div
              key={i}
              className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 opacity-40 animate-ping"
              style={{
                left: positions[i].x,
                top: positions[i].y,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          );
        })}

        {/* Complex Network Connections */}
        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
          {/* Primary connections */}
          <line x1="20%" y1="20%" x2="50%" y2="30%" stroke="rgba(248, 232, 200, 0.3)" strokeWidth="2" className="animate-pulse" />
          <line x1="50%" y1="30%" x2="80%" y2="25%" stroke="rgba(248, 232, 200, 0.3)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <line x1="20%" y1="20%" x2="30%" y2="50%" stroke="rgba(240, 223, 167, 0.25)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <line x1="30%" y1="50%" x2="25%" y2="70%" stroke="rgba(240, 223, 167, 0.25)" strokeWidth="1.5" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          <line x1="70%" y1="50%" x2="75%" y2="75%" stroke="rgba(248, 232, 200, 0.2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2s' }} />
          <line x1="50%" y1="80%" x2="75%" y2="75%" stroke="rgba(248, 232, 200, 0.2)" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '2.5s' }} />
          <line x1="30%" y1="50%" x2="70%" y2="50%" stroke="rgba(255, 215, 0, 0.3)" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '3s' }} />

          {/* Secondary mesh */}
          {[...Array(6)].map((_, i) => (
            <line
              key={i}
              x1={`${20 + Math.random() * 60}%`}
              y1={`${20 + Math.random() * 60}%`}
              x2={`${20 + Math.random() * 60}%`}
              y2={`${20 + Math.random() * 60}%`}
              stroke="rgba(248, 232, 200, 0.1)"
              strokeWidth="0.5"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.8}s` }}
            />
          ))}
        </svg>

        {/* Data Flow Animations */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`flow-${i}`}
            className="absolute w-2 h-2 bg-gradient-to-r from-amber-300 to-transparent rounded-full opacity-50"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              animation: `float ${8 + i * 2}s infinite linear`,
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};
