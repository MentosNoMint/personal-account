import {Listbox, ListboxButton, ListboxOption, ListboxOptions} from '@headlessui/react';
import {CheckIcon, ChevronDownIcon} from '@heroicons/react/20/solid';
import {useState} from 'react';
import Card from "@components/ui/cards/Card.tsx";

const people = [
  {id: 1, name: '1 курс'},
  {id: 2, name: '2 курс'},
  {id: 3, name: '3 курс'},
];

const semester = [
  {id: 1, name: '1 семестр'},
  {id: 2, name: '2 семестр'},
];

const CustomSelect = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [selectedSemester, setSemester] = useState(semester[0]);

  return (
    <Card classname="bg-custom-gray">
      <p className="text-black text-base font-medium">Параметры поиска</p>
      <div className="mt-3 flex w-full gap-2">
        <Listbox value={selectedPerson}
                 onChange={setSelectedPerson}>
          <ListboxButton
            className="w-full h-18 rounded-3xl bg-white flex justify-between items-center px-6 text-[0.938rem] font-medium text-black/80">
            {selectedPerson.name}
            <ChevronDownIcon
              className="size-4 opacity-75"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions anchor="bottom"
                          transition
                          className="w-(--button-width) rounded-3xl bg-white mt-1 p-2 transition duration-100 ease-in data-leave:data-closed:opacity-0 border border-[#ebeaed]">
            {people.map((person) => (
              <ListboxOption key={person.id}
                             value={person}
                             className="group data-focus:bg-custom-yellow rounded-2xl flex gap-2 px-4 py-3 items-center text-[0.938rem] font-medium">
                <CheckIcon className="invisible size-4 group-data-selected:visible" />
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
        <Listbox value={selectedSemester}
                 onChange={setSemester}>
          <ListboxButton
            className="w-full h-18 rounded-3xl bg-white flex justify-between items-center px-6 text-[0.938rem] font-medium text-black/80">
            {selectedSemester.name}
            <ChevronDownIcon
              className="size-4 opacity-75"
              aria-hidden="true"
            />
          </ListboxButton>
          <ListboxOptions anchor="bottom"
                          transition
                          className="w-(--button-width) rounded-3xl bg-white mt-1 p-2 transition duration-100 ease-in data-leave:data-closed:opacity-0 border border-[#ebeaed]">
            {semester.map((person) => (
              <ListboxOption key={person.id}
                             value={person}
                             className="group data-focus:bg-custom-yellow rounded-2xl flex gap-2 px-4 py-3 items-center text-[0.938rem] font-medium">
                <CheckIcon className="invisible size-4 group-data-selected:visible" />
                {person.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </Card>
  );
};

export default CustomSelect;