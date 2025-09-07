import Navigation from "@/components/navigation"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
      <Navigation />

      <div className="pt-20 pb-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="mb-8">
            <div className="h-8 bg-slate-700 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-slate-800 rounded animate-pulse w-2/3"></div>
          </div>

          <div className="bg-gradient-to-b from-gray-900/90 to-black/90 border border-slate-700 rounded-lg p-6">
            <div className="space-y-6">
              <div className="h-6 bg-slate-700 rounded animate-pulse w-1/3"></div>
              <div className="space-y-4">
                <div className="h-4 bg-slate-800 rounded animate-pulse w-1/4"></div>
                <div className="h-10 bg-slate-800 rounded animate-pulse"></div>
                <div className="h-4 bg-slate-800 rounded animate-pulse w-1/4"></div>
                <div className="h-10 bg-slate-800 rounded animate-pulse"></div>
                <div className="h-4 bg-slate-800 rounded animate-pulse w-1/4"></div>
                <div className="h-10 bg-slate-800 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
