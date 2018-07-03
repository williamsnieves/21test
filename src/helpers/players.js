export const handlePlayers = runsData => {
  let playersDataRequests = []
  playersDataRequests.push(
    runsData.data.map(run => fetch(run.players[0].uri).then(res => res.json()))
  )
  const data = Promise.all(playersDataRequests[0]).then(players => {
    const newRunsData = runsData.data.map((player, key) => ({
      ...player,
      players: players[key].data
    }))
    return newRunsData
  })

  return data
}
