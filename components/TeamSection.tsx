'use client'

import { useState } from 'react'
import Image from 'next/image'
import TeamMemberModal, { TeamMember } from './TeamMemberModal'

interface TeamSectionProps {
  teamMembers: {
    executives: TeamMember[]
    officers: TeamMember[]
    svp: TeamMember[]
    external: TeamMember[]
  }
  heading: string
}

export default function TeamSection({ teamMembers, heading }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          {heading}
        </h2>

        {/* 経営陣 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
          {teamMembers.executives.map((member) => (
            <div
              key={member.id}
              className="text-center cursor-pointer group"
              onClick={() => setSelectedMember(member)}
            >
              <div className="mb-4 aspect-square overflow-hidden transition-transform group-hover:scale-105">
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={250}
                  height={250}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {member.name}
              </h3>
              <p
                className="text-sm text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: member.role }}
              />
            </div>
          ))}
        </div>

        {/* 執行役員 */}
        {teamMembers.officers.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {teamMembers.officers.map((member) => (
              <div
                key={member.id}
                className="text-center cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="mb-4 aspect-square overflow-hidden transition-transform group-hover:scale-105">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p
                  className="text-sm text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: member.role }}
                />
              </div>
            ))}
          </div>
        )}

        {/* SVP */}
        {teamMembers.svp.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12">
            {teamMembers.svp.map((member) => (
              <div
                key={member.id}
                className="text-center cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="mb-4 aspect-square overflow-hidden transition-transform group-hover:scale-105">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p
                  className="text-sm text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: member.role }}
                />
              </div>
            ))}
          </div>
        )}

        {/* 社外取締役・監査役 */}
        {teamMembers.external.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {teamMembers.external.map((member) => (
              <div
                key={member.id}
                className="text-center cursor-pointer group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="mb-4 aspect-square overflow-hidden transition-transform group-hover:scale-105">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p
                  className="text-sm text-slate-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: member.role }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* モーダル */}
      <TeamMemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  )
}
