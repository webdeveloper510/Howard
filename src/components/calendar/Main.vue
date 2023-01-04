<template>
  <FullCalendar :options="options" />
</template>

<script setup>
import "@fullcalendar/core/vdom";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import dom from "@left4code/tw-starter/dist/js/dom";

const options = {
  plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
  droppable: true,
  headerToolbar: {
    left: "prev,next today",
    center: "title",
    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
  },
 // defaultDate: '2018-06-01',
  initialDate: "2023-01-04",
  navLinks: true,
  editable: true,
  dayMaxEvents: true,
  events: [
    {
      title: "Vue Vixens Day",
      start: "2023-01-05",
      end: "2023-01-08",
    },
    {
      title: "VueConfUS",
      start: "2023-01-11",
      end: "2023-01-15",
    },
    {
      title: "VueJS Amsterdam",
      start: "2023-01-17",
      end: "2023-01-21",
    },
    {
      title: "Vue Fes Japan 2019",
      start: "2023-01-21",
      end: "2023-01-24",
    },
    {
      title: "Laracon 2021",
      start: "2023-01-24",
      end: "2023-01-27",
    },
  ],
  drop: function (info) {
    if (dom("#checkbox-events").length && dom("#checkbox-events")[0].checked) {
      dom(info.draggedEl).parent().remove();

      if (dom("#calendar-events").children().length == 1) {
        dom("#calendar-no-events").removeClass("hidden");
      }
    }
  },
};
</script>
