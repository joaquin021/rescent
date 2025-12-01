import { useState, useEffect } from 'react';

const PHASE_DURATIONS = {
  STIMULATION: 60, // 60 segundos
  ACTION: 20,      // 20 segundos
};

const TrainingSession = ({ aroma }) => {
  const [phase, setPhase] = useState('STIMULATION'); // 'STIMULATION' | 'ACTION' | 'COMPLETED'
  const [timeLeft, setTimeLeft] = useState(PHASE_DURATIONS.STIMULATION);
  const [progress, setProgress] = useState(0);

  // Efecto principal del temporizador
  useEffect(() => {
    if (phase === 'COMPLETED') return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Cambiar de fase
          if (phase === 'STIMULATION') {
            setPhase('ACTION');
            return PHASE_DURATIONS.ACTION;
          } else if (phase === 'ACTION') {
            setPhase('COMPLETED');
            return 0;
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  // Calcular progreso
  useEffect(() => {
    const totalDuration =
      phase === 'STIMULATION'
        ? PHASE_DURATIONS.STIMULATION
        : PHASE_DURATIONS.ACTION;
    const elapsed = totalDuration - timeLeft;
    setProgress((elapsed / totalDuration) * 100);
  }, [timeLeft, phase]);

  const handleReset = () => {
    setPhase('STIMULATION');
    setTimeLeft(PHASE_DURATIONS.STIMULATION);
    setProgress(0);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full">
      {/* Indicador de Fase */}
      <div className="mb-6 md:mb-8 text-center">
        {phase === 'STIMULATION' && (
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-primary-500/20 border border-primary-500/30 rounded-full">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-primary-400 rounded-full animate-pulse" />
            <span className="text-primary-300 font-semibold text-sm md:text-base">Fase 1: Estimulación</span>
          </div>
        )}
        {phase === 'ACTION' && (
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-accent-500/20 border border-accent-500/30 rounded-full">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-accent-300 font-semibold text-base md:text-lg">¡Huele Ahora!</span>
          </div>
        )}
        {phase === 'COMPLETED' && (
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 bg-slate-700/50 border border-slate-600 rounded-full">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-slate-300 font-semibold text-sm md:text-base">Sesión Completada</span>
          </div>
        )}
      </div>

      {/* Barra de Progreso y Timer */}
      <div className="mb-6 md:mb-8">
        <div className="w-full h-2 md:h-3 bg-slate-800 rounded-full overflow-hidden mb-3 md:mb-4">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-linear ${
              phase === 'STIMULATION' ? 'bg-primary-500' : 'bg-accent-500'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center">
          <span className={`text-5xl md:text-6xl font-bold font-mono ${
            phase === 'ACTION' ? 'text-accent-400' : 'text-slate-200'
          }`}>
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Contenido según la fase */}
      {phase === 'STIMULATION' && (
        <div className="space-y-5 md:space-y-6 animate-fade-in">
          {/* Nube de adjetivos */}
          <div className="flex flex-wrap gap-2 justify-center">
            {aroma.adjectives.map((adj, idx) => (
              <span key={idx} className="inline-block px-3 py-1 text-xs md:text-sm rounded-full bg-primary-500/20 text-primary-300 font-medium border border-primary-500/30">
                {adj}
              </span>
            ))}
          </div>

          {/* Texto evocador */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-700">
            <p className="text-base md:text-lg leading-relaxed text-slate-300 font-serif">
              {aroma.evocativeText}
            </p>
          </div>

          {/* Preguntas */}
          <div className="space-y-3 md:space-y-4">
            <h3 className="text-base md:text-lg font-semibold text-slate-200">Reflexiona:</h3>
            {aroma.questions.map((question, idx) => (
              <div key={idx} className="bg-primary-500/10 rounded-lg p-3 md:p-4 border-l-4 border-primary-500">
                <p className="text-sm md:text-base text-slate-300">{question}</p>
              </div>
            ))}
          </div>

          {/* Galería Secundaria: images[1] y images[2] (no mostramos images[0] porque ya está arriba como hero) */}
          {aroma.images.length > 1 && (
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {aroma.images.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={img}
                    alt={`${aroma.name} detalle ${idx + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {phase === 'ACTION' && (
        <div className="text-center space-y-6 md:space-y-8 py-8 md:py-12 animate-fade-in">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-accent-500/20 rounded-full flex items-center justify-center border-2 border-accent-500/30">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-100 font-serif">
              Huele el Aroma
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-md mx-auto px-4">
              Acerca el aroma a tu nariz y haz inspiraciones cortas y suaves
            </p>
          </div>

          {/* Animación de respiración */}
          <div className="flex justify-center">
            <div className="w-4 h-4 bg-accent-400 rounded-full animate-ping" />
          </div>
        </div>
      )}

      {phase === 'COMPLETED' && (
        <div className="text-center space-y-6 md:space-y-8 py-8 md:py-12 animate-fade-in">
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-slate-700/50 rounded-full flex items-center justify-center border-2 border-slate-600">
            <svg className="w-12 h-12 md:w-16 md:h-16 text-slate-300" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>

          <div className="space-y-3 md:space-y-4 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-100 font-serif">
              ¡Excelente trabajo!
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-md mx-auto">
              Has completado la sesión de entrenamiento con {aroma.name}
            </p>
          </div>

          {/* Botones - Ancho completo en mobile, inline en desktop */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center px-4 md:px-0">
            <button
              onClick={handleReset}
              className="w-full md:w-auto h-12 md:h-auto px-6 md:px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl touch-manipulation"
            >
              Repetir Sesión
            </button>
            <a
              href="/"
              className="w-full md:w-auto h-12 md:h-auto px-6 md:px-8 py-3 bg-slate-700 hover:bg-slate-600 text-slate-100 rounded-full font-semibold transition-colors flex items-center justify-center touch-manipulation"
            >
              Volver al Menú
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingSession;
