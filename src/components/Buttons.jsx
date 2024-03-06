
export function Buttons({addWater, removeWater}) {
  return (
    <div className='Buttons'>
        <button onClick={addWater}>to fill</button>
        <button onClick={removeWater}>to empty</button>
    </div>
  )
}
