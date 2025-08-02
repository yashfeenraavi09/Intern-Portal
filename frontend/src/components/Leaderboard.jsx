import {
  MdLeaderboard,
  MdPerson,
  MdWorkspacePremium,
  MdMilitaryTech,
  MdEmojiEvents,
} from "react-icons/md";

export default function Leaderboard({ data }) {
  const maxDonation = Math.max(...data.map((d) => d.donations));

  return (
    <section className="mt-10">
      <div className="flex items-center gap-2 mb-6">
        <MdLeaderboard className="text-yellow-600 w-7 h-7" />
        <h2 className="text-2xl font-bold text-gray-800">Leaderboard</h2>
      </div>

      <div className="overflow-x-auto bg-white border border-gray-200 rounded-xl shadow-md">
        <table className="min-w-full text-sm text-gray-700">
          <thead className="bg-gray-50 border-b text-left">
            <tr>
              <th className="p-4">Rank</th>
              <th className="p-4">Name</th>
              <th className="p-4">Donations</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => {
              const percentage = Math.round(
                (entry.donations / maxDonation) * 100
              );

              let rankIcon = null;
              if (index === 0) {
                rankIcon = (
                  <MdWorkspacePremium
                    title="1st Place"
                    className="text-yellow-500 w-5 h-5"
                  />
                );
              } else if (index === 1) {
                rankIcon = (
                  <MdMilitaryTech
                    title="2nd Place"
                    className="text-gray-400 w-5 h-5"
                  />
                );
              } else if (index === 2) {
                rankIcon = (
                  <MdEmojiEvents
                    title="3rd Place"
                    className="text-orange-400 w-5 h-5"
                  />
                );
              }

              return (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 transition-all duration-200"
                >
                  <td className="p-4 font-semibold">
                    {rankIcon || (
                      <span className="text-gray-500 font-medium">
                        {index + 1}
                      </span>
                    )}
                  </td>
                  <td className="p-4 flex items-center gap-2 text-gray-800">
                    <MdPerson className="text-blue-500 w-5 h-5" />
                    {entry.name}
                  </td>
                  <td className="p-4 text-green-600 font-medium">
                    INR {entry.donations}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
