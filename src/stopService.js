const KEY = 'stops'

// TODO for real
export function loadUserStops() {
  return [
      { route: '472', name: 'Blackhawk P&R', number:  43404, lat: 44.792084, lon: -93.198439},
      { route: '472', name: 'Marquette & 3rd', number:  53297, lat: 44.979892, lon: -93.267946}
  ];
}

export function saveUserStops(newStops) {
  window.localStorage.setItem(KEY, JSON.stringify(newStops))
}
export function addStop(number, route, name, lat, lon) {
  const stops = loadUserStops()
  stops.push({ number, route, name, lat, lon })
  saveUserStops(stops)
}

export function deleteStop(number) {
  saveUserStops(loadUserStops().filter(x => x.number !== number))
}
