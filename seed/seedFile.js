const db = require('../db')
const { Position, Employee, Manager } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const position1 = await new Position ( {
        positionName: 'Security Specialist',
        positionSalary: '$450,000',
        positionDescription: 'A physical security specialist is the real-world sentinel, a modern-day knight guarding against tangible threats. Their watchful eyes and strategic acumen ensure the security of assets, people, and places. Whether on the frontlines, orchestrating complex security operations, or swiftly responding to challenges, these specialists are the ultimate protectors of the physical realm.'
    })
    position1.save()

    const position2 = await new Position ({
        positionName: 'Software Engineer',
        positionSalary: "$123,456",
        positionDescription: "Software engineers are the architects of the digital world. They design and develop software applications, turning ideas into functional code and creating the backbone of modern technology.",
    })
    position2.save()

    const position3 = await new Position ({
        positionName: 'Crypto Bounty Hunter',
        positionSalary: 'ᖬ550,000',
        positionDescription: 'These tech-savvy individuals track down digital outlaws in the world of cryptocurrency, claiming bounties for cybersecurity victories.',
    })
    position3.save()

    const position4 = await new Position ({
        positionName: 'Quantum Data Alchemist',
        positionSalary: '$1,234,567',
        positionDescription: 'Quantum Data Alchemists are the modern-day wizards of data manipulation, harnessing the power of quantum computing to transform raw information into priceless insights, making them some of the most sought-after and handsomely rewarded professionals in the digital age.'
    })
    position4.save()

    const employee1 = await new Employee ({
        nameOfEmployee: 'Rob Castor',
        image: 'https://people.com/thmb/GAYopbJ_l_oz-ebn7oTvXYCjjBs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x219:751x221)/Stone-Cold-Steve-Austin-2-efaf29d75d124c9e8d007edfbb907116.jpg',
        status: true,
        employerTenure: '6 weeks',
        position: position1.positionName,
        salary: position1.positionSalary
    })
    employee1.save()

    const employee2 = await new Employee ({
        nameOfEmployee: 'Ben Wittaker',
        image: 'https://i.redd.it/6llsmg4m9tv71.png',
        status: true,
        employerTenure: '6 weeks',
        position: position2.positionName,
        salary:position2.positionSalary
    })
    employee2.save()

    const employee3 = await new Employee ({
        nameOfEmployee: 'Anthony Hunter',
        image: 'https://storage.googleapis.com/pai-images/bd3aa098bc8d4a1f887a5155f0cc50a9.jpeg',
        status: true,
        employerTenure: '6 weeks',
        position: position3.positionName,
        salary: position3.positionSalary
    })
    employee3.save()

    const employee4 = await new Employee ({
        nameOfEmployee: 'Adham Morsy',
        image: 'https://wallpapers.com/images/hd/tommy-shelby-4k-full-frontal-1h114uxm4kcqsr1q.jpg',
        status: true,
        employerTenure: '6 weeks',
        position: position4.positionName,
        salary: position4.positionSalary
    })
    employee4.save()

    const employee5 = await new Employee({
        nameOfEmployee: 'John Doe',
        image: 'https://img.freepik.com/free-photo/portrait-hesitant-man-purses-lips-looks-bewilderment-feels-doubt_273609-16785.jpg',
        status: true,
        employerTenure: '3 months',
        position: position1.positionName,
        salary: position1.positionSalary
    })
    employee5.save()

    const employee6 = await new Employee({
        nameOfEmployee: 'Jane Smith',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
        status: true,
        employerTenure: '1 year',
        position: position2.positionName,
        salary: position2.positionSalary
    })
    employee6.save()

    const employee7 = await new Employee({
        nameOfEmployee: 'Michael Johnson',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww',
        status: true,
        employerTenure: '6 months',
        position: position3.positionName,
        salary: position3.positionSalary
    })
    employee7.save()

    const employee8 = await new Employee({
        nameOfEmployee: 'Sarah Williams',
        image: 'https://live.staticflickr.com/5252/5403292396_0804de9bcf_b.jpg',
        status: true,
        employerTenure: '9 months',
        position: position1.positionName,
        salary: position1.positionSalary
    })
    employee8.save()

    const employee9 = await new Employee({
        nameOfEmployee: 'David Lee',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww',
        status: true,
        employerTenure: '2 years',
        position: position4.positionName,
        salary: position4.positionSalary
    })
    employee9.save()

    const manager1 = await new Manager({
        managerName: 'Jaim Toledo',
        managerLocation: 'Chicago, IL',
        managerImage: "images/Screenshot from 2023-10-17 16-58-41.png",
        employees: [employee1.nameOfEmployee, employee2.nameOfEmployee, employee3.nameOfEmployee, employee4.nameOfEmployee]
    })
    manager1.save()

    const manager2 = await new Manager({
        managerName: 'Zorri Musk',
        managerLocation: 'Chicago, IL',
        managerImage: "images/Screenshot from 2023-10-17 17-08-36.png",
        employees: [employee5.nameOfEmployee, employee6.nameOfEmployee]
    })
    manager2.save()

    const manager3 = await new Manager({
        managerName: 'Luke Skywalker',
        managerLocation: 'On a planet far far away',
        managerImage: "images/Screenshot from 2023-10-17 17-15-02.png",
        employees: [employee7.nameOfEmployee, employee8.nameOfEmployee, employee9.nameOfEmployee]
    })
    manager3.save()


}
const run = async () => {
    await main()
    //db.close()
  }
  
  run()