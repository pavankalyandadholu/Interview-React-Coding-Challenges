
const GussNumber = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Guess the Number</h2>
        <p className="text-gray-600 text-center mb-8">Try to guess the number between 1 and 100</p>
        
        <input 
          type="number" 
          placeholder="Enter your guess"
          min="1"
          max="100"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
        />
        
        <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200 ease-in-out mb-6">
          Submit Guess
        </button>
        
        <div className="text-center mb-4">
          <p className="text-lg font-semibold text-gray-700">Start guessing!</p>
        </div>
        
        <div className="text-center">
          <p className="text-sm text-gray-600">Number of attempts: 0</p>
        </div>
      </div>
    </div>
  )
}

export default GussNumber