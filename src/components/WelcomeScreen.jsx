import { useState } from "react"
import logo from "../assets/Logo.png"
import { saveUserProfile } from "../utils/userProfile"

const initialForm = {
  nombre: "",
  edad: "",
  contactoEmergencia: "",
  alergias: "",
  condiciones: "",
  medicamentos: "",
  notasMedicas: "",
}

function WelcomeScreen({ onComplete }) {
  const [form, setForm] = useState(initialForm)

  function updateField(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const profile = {
      ...form,
      creadoEn: new Date().toISOString(),
    }

    saveUserProfile(profile)
    onComplete(profile)
  }

  return (
    <main className="min-h-screen min-h-dvh overflow-y-auto bg-[#0d1120] px-6 py-6 text-white">
      <section className="mx-auto w-full max-w-md">
        <header className="mb-5 text-center">
          <img src={logo} alt="EmerTech" className="mx-auto h-16 w-16 object-contain" />
          <h1 className="mt-4 text-2xl font-black">
            Bienvenido a <span className="text-[#3eb9bc]">EmerTech</span>
          </h1>
          <p className="mt-2 text-sm font-semibold leading-6 text-white/70">
            Completa tu informacion para personalizar la orientacion del asistente.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label className="block">
            <span className="mb-2 block text-sm font-bold text-white/80">Nombre</span>
            <input
              required
              name="nombre"
              value={form.nombre}
              onChange={updateField}
              className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#0d1120] outline-none focus:border-[#3eb9bc]"
              placeholder="Tu nombre"
            />
          </label>

          <div className="grid grid-cols-2 gap-3">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-white/80">Edad</span>
              <input
                required
                name="edad"
                value={form.edad}
                onChange={updateField}
                type="number"
                min="0"
                className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#0d1120] outline-none focus:border-[#3eb9bc]"
                placeholder="Edad"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-white/80">Contacto</span>
              <input
                name="contactoEmergencia"
                value={form.contactoEmergencia}
                onChange={updateField}
                className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#0d1120] outline-none focus:border-[#3eb9bc]"
                placeholder="Emergencia"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-white/80">Alergias</span>
            <input
              name="alergias"
              value={form.alergias}
              onChange={updateField}
              className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#0d1120] outline-none focus:border-[#3eb9bc]"
              placeholder="Medicamentos, alimentos u otras"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-white/80">
              Condiciones medicas
            </span>
            <textarea
              name="condiciones"
              value={form.condiciones}
              onChange={updateField}
              rows="2"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#0d1120] outline-none focus:border-[#3eb9bc]"
              placeholder="Asma, diabetes, hipertension..."
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-white/80">
              Medicamentos actuales
            </span>
            <input
              name="medicamentos"
              value={form.medicamentos}
              onChange={updateField}
              className="w-full rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#0d1120] outline-none focus:border-[#3eb9bc]"
              placeholder="Medicacion que usas"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-bold text-white/80">Notas</span>
            <textarea
              name="notasMedicas"
              value={form.notasMedicas}
              onChange={updateField}
              rows="2"
              className="w-full resize-none rounded-2xl border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-[#0d1120] outline-none focus:border-[#3eb9bc]"
              placeholder="Cualquier dato importante"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#3eb9bc] px-5 py-3 text-base font-black text-[#0d1120] shadow-lg transition active:scale-95"
          >
            Entrar
          </button>
        </form>
      </section>
    </main>
  )
}

export default WelcomeScreen
