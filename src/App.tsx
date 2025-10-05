import SettingWidget from "./components/widgets/setting-widget"

function App() {

  return (
    <main>
      <div className="py-10">
        <h1 className="text-3xl font-bold text-center"> Curated React Components </h1>
      </div>
      <section className="flex justify-center items-center min-h-screen w-full">
        <SettingWidget />
      </section>
    </main>
  )
}

export default App