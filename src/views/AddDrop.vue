<script setup>
import { useCourse } from '../stores/course';
import { useSelect } from '../stores/add_drop';
import { ref } from "vue";
const { course } = useCourse();
const { select, add_subject, remove_subject, restart } = useSelect();
const disabled = ref(false)

function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1500)
}

</script>
<template>

    <div class="container text-center mt-5">
        <div class="row mt-5" style="font-size: 22px;">
            <div class="col">
                <div>รหัสวิชา</div>
            </div>
            <div class="col">
                <div>ชื่อวิชา</div>
            </div>
            <div class="col">
                <div>กลุ่ม</div>
            </div>
            <div class="col-2">
                <div></div>
            </div>
        </div>
        <div class="row mt-3" v-for="n in course.length">
            <div class="col" v-if="course && course[n - 1]">
                {{ course[n - 1].code }}
            </div>
            <div class="col" v-if="course && course[n - 1]">
                {{ course[n - 1].nameTh }}<br>
                {{ course[n - 1].nameEg }}
            </div>
            <div class="col" v-if="course && course[n - 1]">
                {{ course[n - 1].group }}
            </div>
            <div class="col-2">
                <button class="col btn btn-success w-50 "
                    @click="add_subject(course[n - 1].code, course[n - 1].nameTh, course[n - 1].nameEg, course[n - 1].group);warnDisabled()"
                    >+</button>
            </div>
        </div>
    </div>
    <div class="row me-5 mt-5">
        <div :class="{ shake: disabled }" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src="../assets/icons8-shopping-basket-add-48.png" alt="bsk" ></div>
    </div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">รายการที่เลือก</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <div class="row mt-3" style="font-size: 22px; color:white;">
                    <div class="col">
                        <div>รหัสวิชา</div>
                    </div>
                    <div class="col">
                        <div>ชื่อวิชา</div>
                    </div>
                    <div class="col">
                        <div>กลุ่ม</div>
                    </div>
                    <div class="col-2">
                        <div></div>
                    </div>
                </div>
                <div class="row m-3" v-for="n in select.length">
                    <div class="col" v-if="select && select[n - 1]">
                        {{ select[n - 1].code }}
                    </div>
                    <div class="col" v-if="select && select[n - 1]">
                        {{ select[n - 1].nameTh }}<br>
                        {{ select[n - 1].nameEg }}
                    </div>
                    <div class="col" v-if="select && select[n - 1]">
                        {{ select[n - 1].group }}
                    </div>
                    <div class="col-2">
                        <button class="col btn btn-danger w-50 " @click="remove_subject(n - 1)">-</button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class=" btn btn-success me-3" data-bs-target="#finish" data-bs-toggle="modal">ยืนยัน</button>
                <button class="btn btn-danger me-3" data-bs-dismiss="modal" aria-label="Close" >ยกเลิก</button>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
img:hover {
    height: 50px;
}

.shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
  }
  
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }
  
    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }
  
    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }
  
    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }</style>