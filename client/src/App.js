import './App.css';

function App() {
  return (
    <div className="App">
      <ul className="divide-y divide-gray-200">
        <li className="py-4 flex">
          <img className="h-10 w-10 rounded-full" alt="" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Tyler</p>
            <p className="text-sm text-gray-500">tallen@stripe.com</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
