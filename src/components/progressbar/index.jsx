export function ProgressBar({progress}) {
    return(
        <div className='progressbar'>
            <div 
            role="progressbar"
            aria-label='Progresso de hábitos completos nesse dia'
            aria-valuenow={progress}
            className='h-3 rounded-xl bg-violet-600'
            style={{ width: `${progress}%` }}
            />
        </div>
    )
}