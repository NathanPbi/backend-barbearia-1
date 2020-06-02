import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import Appointment from '../models/Appointment';
import AppointmentRepository from '../repositories/AppointmentRepository';
import AppError from '../erros/AppError';

interface Request {
    provider_id: string;
    date: Date;
}

class CreateAppointmentService {
    public async execute({ provider_id, date }: Request): Promise<Appointment> {
        const appointmentsRepository = getCustomRepository(
            AppointmentRepository,
        );

        const appointmentDate = startOfHour(date);

        const findAppointmentSameDate = await appointmentsRepository.findByDate(
            appointmentDate,
        );

        if (findAppointmentSameDate) {
            throw new AppError('This appointment already booked', 401);
        }

        const appointment = appointmentsRepository.create({
            provider_id,
            date: appointmentDate,
        });

        await appointmentsRepository.save(appointment);

        return appointment;
    }
}

export default CreateAppointmentService;
