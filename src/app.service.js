const data = [
    {
        id: 'widget1',
        price: 750,
        dimensions: '10" x 30" x 20"',
        weight: '6lbs',
        capacity: "10L",
        desc: '1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'widget2',
        price: 240,
        dimensions: '20" x 31" x 50"',
        weight: '35lbs',
        capacity: "7L",
        desc: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'widget3',
        price: 500,
        dimensions: '17" x 35" x 30"',
        weight: '33lbs',
        capacity: "12L",
        desc: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'widget4',
        price: 900,
        dimensions: '10" x 30" x 50"',
        weight: '70lbs',
        capacity: "20L",
        desc: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        id: 'widget5',
        price: 800,
        dimensions: '18" x 6" x 22"',
        weight: '3lbs',
        capacity: "1L",
        desc: '5 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];

const AppService = {
    selectedWidgetId: 'widget1',
    widgetData : data,

    setSelectedWidgetId: function(id) {
        this.selectedWidgetId = id;
        console.log('set selected widget id ' + id);
    },

    getSelectedWidget: function(id) {
        return this.widgetData.find(widget => widget.id == id);
    },

    searchWidgetData: function(val) {
        if (!val || val === '') return data;

        let result = [];
        data.forEach(d => {
            if (d.id.search(val) >= 0) result.push(d);
        });

        return result;
    }
}

export default AppService;