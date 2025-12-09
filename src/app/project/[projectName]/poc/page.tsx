'use client'

import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { FiAlertTriangle, FiDelete, FiEdit, FiEdit2, FiTrash } from 'react-icons/fi'
import React from 'react'
import { vaccines, phases, Phase, phaseColors, peopleOptions } from '../../../../data/poc'

type Vaccine = (typeof vaccines)[number]

function getPhaseIndex(currentPhase: Phase) {
  return phases.indexOf(currentPhase)
}

export default function POCPage({ params }: { params: Promise<{ projectName: string }> }) {
  const { projectName } = React.use(params)

  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(vaccines)
  const [selectedVaccine, setSelectedVaccine] = useState<Vaccine | null>(null)

  const handleSearch = () => {
    const normalizedQuery = query.trim().toLowerCase()
    const filteredVaccines = normalizedQuery
      ? vaccines.filter((vaccine) => vaccine.name.toLowerCase().includes(normalizedQuery))
      : vaccines
    setFiltered(filteredVaccines)
  }

  const handleClear = () => {
    setQuery('')
    setFiltered(vaccines)
  }

  if (projectName.toLowerCase() !== 'moderna') notFound()

  return (
    <section className="min-h-screen bg-secondary flex flex-col space-y-12 px-4 py-12 md:px-48 md:py-24">
      <Link
        href="/project/moderna"
        className="absolute md:top-24 md:left-24 top-22 flex items-center text-primary font-sans hover:text-gray transition"
      >
        <BiArrowBack className="w-6 h-6 mr-2" />
        <span className="font-semibold">Back</span>
      </Link>

      <h1 className="text-3xl font-bold text-primary mb-2">Vaccine Lifecycle Tracker - POC</h1>

      {!selectedVaccine && (
        <>
          {/* Search */}
          <div className="flex w-full items-center gap-3 my-8">
            {/* Input wrapper (important for positioning the X button) */}
            <div className="relative  w-full max-w-[394px] min-w-[100px]">
              <input
                placeholder="Search vaccines"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch()
                  }
                }}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-1 focus:ring-primary/40"
              />

              {/* Clear (X) button — only visible when there is text */}
              {query && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={handleSearch}
              className="px-5 py-2.5 rounded-md bg-primary text-white font-medium shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/60"
            >
              Search
            </button>
          </div>

          {/* Table wrapper (handles horizontal scroll on mobile) */}
          <div className="w-full border border-gray-300 rounded-lg overflow-x-auto bg-white">
            {/* Set a min width so it scrolls on small screens */}
            <div className="min-w-[720px]">
              {filtered.map((vaccine) => {
                return (
                  <div
                    key={vaccine.name}
                    className="group flex items-stretch border-b border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    {/* Vaccine name column */}
                    <div className="flex-[2] px-4 py-3 flex items-center gap-2 text-gray-600 font-semibold">
                      <button
                        type="button"
                        onClick={() => setSelectedVaccine(vaccine)}
                        className="truncate text-left text-primary hover:underline"
                      >
                        {vaccine.name}
                      </button>
                    </div>

                    {/* Phase visualization columns */}
                    <div className="flex-[5] flex">
                      {phases.map((phase, i) => {
                        const currentPhaseIndex = getPhaseIndex(vaccine.currentPhase)
                        const isActive = i <= currentPhaseIndex
                        const color = phaseColors[phase]

                        return (
                          <div
                            key={phase}
                            className={`
                          relative flex-1 flex items-center justify-center
                          px-2 py-3 text-xs md:text-sm text-white text-center
                          ${isActive ? 'opacity-100' : 'opacity-20'}
                        `}
                            style={{ backgroundColor: color }}
                          >
                            {/* content sits above overlay */}
                            <div className="relative z-20 flex items-center justify-center">
                              <span className="px-1 font-semibold">{phase}</span>
                              {vaccine.isOverdue && phase === vaccine.currentPhase && (
                                <FiAlertTriangle className="text-red-600 w-5 h-5 flex-shrink-0 ml-2" />
                              )}
                            </div>

                            {/* subtle gray overlay on active cells when row is hovered */}
                            {isActive && (
                              <span
                                className="
                              pointer-events-none absolute inset-0 z-10
                              bg-gray-50/30 opacity-0
                              group-hover:opacity-100
                              transition-colors duration-150
                            "
                              />
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}

              {filtered.length === 0 && (
                <div className="w-full flex flex-col items-center justify-center py-12 text-center text-gray-500">
                  <FiAlertTriangle className="w-10 h-10 text-gray-400 mb-3" />

                  <p className="text-sm font-medium text-gray-600">No vaccines match your search</p>

                  <p className="text-xs text-gray-500 mt-1">
                    Try refining your search terms or searching for a different vaccine
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Dashboard view when a vaccine is selected */}
      {selectedVaccine && (
        <VaccineDashboard vaccine={selectedVaccine} onBack={() => setSelectedVaccine(null)} />
      )}
    </section>
  )
}

function VaccineDashboard({ vaccine, onBack }: { vaccine: Vaccine; onBack: () => void }) {
  const currentPhaseIndex = getPhaseIndex(vaccine.currentPhase)

  const statusLabel = vaccine.isOverdue ? 'Overdue' : 'On Track'
  const statusBadgeClasses = vaccine.isOverdue
    ? 'bg-red-50 text-red-700 border-red-200'
    : 'bg-emerald-50 text-emerald-700 border-emerald-200'

  const [cmcPm, setCmcPm] = useState('Unassigned')
  const [rnaLead, setRnaLead] = useState('Unassigned')
  const [tdLead, setTdLead] = useState('Unassigned')
  const [productionLead, setProductionLead] = useState('Unassigned')

  const isDisabled = cmcPm === 'Unassigned'

  return (
    <div className="mt-6 bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
      {/* Back */}
      <button
        type="button"
        onClick={onBack}
        className="inline-flex items-center gap-1 text-xs md:text-sm text-gray-500 hover:text-primary transition-colors"
      >
        <span aria-hidden>←</span>
        <span className="hover:underline">Back</span>
      </button>

      {/* Header + phase progression */}
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* Title / metadata */}
        <div className="space-y-3 w-[500px]">
          <h2 className="text-2xl font-semibold text-primary">{vaccine.name}</h2>

          <div className="flex flex-wrap items-center text-xs">
            <span
              className={`inline-flex items-center rounded-full border px-4 py-2 font-medium ${statusBadgeClasses}`}
            >
              {statusLabel}
            </span>
          </div>
        </div>

        {/* Phase timeline */}
        <div className="w-full bg-slate-50 rounded-lg border border-slate-100 p-4 overflow-x-auto">
          {/* Inner wrapper needed so scroll works cleanly */}
          <div className="flex items-center min-w-max">
            {phases.map((phase, i) => {
              const isActive = i <= currentPhaseIndex
              const color = phaseColors[phase]
              const isCurrentPhase = vaccine.currentPhase === phase

              return (
                <div
                  key={phase}
                  className={`
            relative flex flex-col items-center text-center
            flex-none min-w-[90px] md:flex-1 md:min-w-0
            px-1 md:px-2
            ${i < phases.length - 1 ? 'mr-2' : ''}
          `}
                >
                  <div
                    className="w-full h-3 md:h-4 rounded-full transition-opacity"
                    style={{
                      backgroundColor: color,
                      opacity: isActive ? 1 : 0.1,
                      ...(isCurrentPhase && {
                        boxShadow: `0 0 3px 1px ${color}CC`,
                      }),
                    }}
                  />
                  <span
                    className={`mt-2 text-[10px] md:text-[11px] text-gray-700 leading-snug ${
                      isCurrentPhase ? 'font-semibold' : ''
                    }`}
                  >
                    {phase}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team assignments */}
      <div className="bg-slate-50 rounded-lg border border-gray-200 p-4 md:p-5 space-y-4">
        <h3 className="font-semibold text-gray-800 text-sm">Team assignments</h3>
        <div className="grid gap-4 md:grid-cols-4">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">CMC PM</label>
            <select
              value={cmcPm}
              onChange={(e) => setCmcPm(e.target.value)}
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-primary/40 focus:border-primary/40"
            >
              {peopleOptions.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">RNA Lead</label>
            <select
              value={rnaLead}
              onChange={(e) => setRnaLead(e.target.value)}
              disabled={isDisabled}
              className={`
                w-full rounded-md border px-3 py-2 text-sm shadow-sm
                focus:outline-none focus:ring-1 focus:ring-primary/40
                ${
                  isDisabled
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white text-gray-800 border-gray-300'
                }
              `}
            >
              {peopleOptions.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">TD Lead</label>
            <select
              value={tdLead}
              onChange={(e) => setTdLead(e.target.value)}
              disabled={isDisabled}
              className={`
                w-full rounded-md border px-3 py-2 text-sm shadow-sm
                focus:outline-none focus:ring-1 focus:ring-primary/40
                ${
                  isDisabled
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white text-gray-800 border-gray-300'
                }
              `}
            >
              {peopleOptions.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-gray-700">Production Lead</label>
            <select
              value={productionLead}
              onChange={(e) => setProductionLead(e.target.value)}
              disabled={isDisabled}
              className={`
                w-full rounded-md border px-3 py-2 text-sm shadow-sm
                focus:outline-none focus:ring-1 focus:ring-primary/40
                ${
                  isDisabled
                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    : 'bg-white text-gray-800 border-gray-300'
                }
              `}
            >
              {peopleOptions.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Variations section */}
      <h2 className="text-xl font-semibold text-primary">Versions</h2>
      <div className="space-y-4">
        {vaccine.variations && vaccine.variations.length > 0 ? (
          <div className="space-y-6">
            {vaccine.variations.map((variation) => (
              <div key={variation.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="px-4 py-2 bg-slate-100 border-b border-gray-200 flex items-center justify-between">
                  <div>
                    <h3 className="text-med font-med text-gray-800">
                      {variation.name}
                      {variation.isCurrent && (
                        <span className="rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ml-4">
                          Current
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-500">Lot {variation.lotId}</p>
                  </div>

                  {/* Right side icons (only when CMC PM is assigned) */}
                  {!isDisabled ? (
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="text-gray-500 hover:text-primary transition"
                        title="Edit variation"
                      >
                        <FiEdit2 />
                      </button>
                      <button
                        type="button"
                        className="text-gray-500 hover:text-red-600 transition"
                        title="Delete variation"
                      >
                        <FiTrash />
                      </button>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-[1400px] table-auto text-left text-xs">
                    <thead className="bg-slate-50 border-b border-gray-200">
                      <tr>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[120px]">Phase</th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[150px]">
                          Expected completion
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[120px]">
                          Batch size
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[130px]">
                          DS Site
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[130px]">
                          DP Site
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[140px]">
                          Sequence Version
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[150px]">
                          Formulation Version
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[120px]">
                          Lot Type
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[130px]">
                          Stability Lots
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[150px]">
                          QC Release Status
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[150px]">
                          Shipment Ready
                        </th>
                        <th className="px-4 py-2 font-medium text-gray-600 min-w-[200px]">Notes</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="px-4 py-2 text-gray-700 min-w-[120px]">{variation.phase}</td>
                        <td className="px-4 py-2 text-gray-700 min-w-[150px]">
                          {variation.expectedCompletion}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[120px]">
                          {variation.batchSize}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[130px]">
                          {variation.dsSite}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[130px]">
                          {variation.dpSite}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[140px]">
                          {variation.sequenceVersion}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[150px]">
                          {variation.formulationVersion}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[120px]">
                          {variation.lotType}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[130px]">
                          {variation.stabilityLots}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[150px]">
                          {variation.qcStatus}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[150px]">
                          {variation.shipmentReady}
                        </td>
                        <td className="px-4 py-2 text-gray-700 min-w-[200px]">
                          {variation.notes || '—'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-xs text-gray-500">No variations defined for this candidate.</p>
        )}
      </div>
    </div>
  )
}
