export function get_color() {
	const hex_codes = [
		'#fca5a5',
		'#f87171',
		'#ef4444',
		'#fdba74',
		'#fb923c',
		'#f97316',
		'#fcd34d',
		'#fbbf24',
		'#f59e0b',
		'#fde047',
		'#facc15',
		'#eab308',
		'#bef264',
		'#a3e635',
		'#84cc16',
		'#86efac',
		'#4ade80',
		'#22c55e',
		'#6ee7b7',
		'#34d399',
		'#10b981',
		'#5eead4',
		'#2dd4bf',
		'#14b8a6',
		'#67e8f9',
		'#22d3ee',
		'#06b6d4',
		'#7dd3fc',
		'#38bdf8',
		'#0ea5e9',
		'#93c5fd',
		'#60a5fa',
		'#3b82f6',
		'#a5b4fc',
		'#818cf8',
		'#6366f1',
		'#c4b5fd',
		'#a78bfa',
		'#8b5cf6',
		'#d8b4fe',
		'#c084fc',
		'#a855f7',
		'#f0abfc',
		'#e879f9',
		'#d946ef',
		'#f9a8d4',
		'#f472b6',
		'#ec4899',
		'#fda4af',
		'#fb7185',
		'#f43f5e'
	];

	return hex_codes[Math.floor(Math.random() * hex_codes.length)];
}

export function get_name() {
	const names = [
		'Ada Lovelace',
		'Rick Astley',
		'John Doe',
		'Jane Doe',
		'Bill Sample',
		'Annie Example',
		'Eve Everywoman',
		'Adam Everyman',
		'Nina Nominee',
		'Mike Mockup',
		'Lisa Placeholder',
		'Tom Test',
		'Diana Default',
		'Pat Prototype',
		'Sammy Standard'
	];

	const random_index = Math.floor(Math.random() * names.length);
	return names[random_index];
}
